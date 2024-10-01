import { BadRequestException, Body, ConflictException, Controller, HttpCode, NotFoundException, Post, Put, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { UserRegisterDto } from '../users/dtos/user-register.dto';
import { ProblemDetails } from '../models/problem-details.model';
import { UserGetDto } from '../users/dtos/user-get.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { MailService } from '../mail/mail.service';
import { registrationConfirmation } from '../utils/mail-templates';
import { ConfirmEmail } from '../models/confirm-email.model';
import { APP_URL } from '../utils/config';

@Controller('auth')
export class AuthController {

    public constructor(private usersService: UsersService, private authService: AuthService, private mailService: MailService) {}

    @Post("register")
    public async register(@Body() userRegisterDto: UserRegisterDto) {

        // Check if email exists
        const user = await this.usersService.findByEmail(userRegisterDto.email);

        if (user) {
            const problemDetails = new ProblemDetails();
            problemDetails.error = "Conflict";
            problemDetails.statusCode = 409;
            problemDetails.message = ["Email này đã tồn tại"];
            throw new ConflictException(problemDetails);
        }

        // Proceed to register the user
        const userCreated = await this.authService.register(userRegisterDto);
        const userToReturn = new UserGetDto();
        userToReturn.id = userCreated.id;
        userToReturn.email = userCreated.email;
        userToReturn.fullName = userCreated.fullName;

        // Send confirmation email
        await this.mailService.send("Welcome to OnlineShop4DVDS", registrationConfirmation(`${APP_URL}/auth/confirm-email?email=${userCreated.email}&token=${userCreated.emailToken}`), userCreated.email);

        return userToReturn;
    }

    @HttpCode(200)
    @UseGuards(LocalAuthGuard)
    @Post("login")
    public async login(@Request() req) {
        return await this.authService.login(req.user);
    }
    
    @Put("confirm-email")
    public async confirmEmail(@Body() confirmEmail: ConfirmEmail) {

        if (!confirmEmail || !confirmEmail.email || !confirmEmail.token)
            throw new BadRequestException();

        const user = await this.usersService.findByEmail(confirmEmail.email);

        if (!user)
            throw new NotFoundException();

        if (user.emailToken !== confirmEmail.token)
            throw new ConflictException();

        await this.usersService.update(user.id, {
            emailToken: null,
            isEmailActive: true
        });
    }
}
