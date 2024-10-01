import { IsEmail, IsString, Length } from "class-validator";

export class UserLoginDto {
    
    @IsEmail()
    email: string;

    @IsString()
    @Length(6, 64)
    password: string;
}