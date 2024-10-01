import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    public constructor(private usersService: UsersService) {}

    @Get("/:id")
    public async get(@Param("id") id: string) {
        
    }
}
