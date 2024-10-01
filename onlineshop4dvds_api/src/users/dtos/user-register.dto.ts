import { IsEmail, IsString, Length } from "class-validator";

export class UserRegisterDto {
    
    @IsString({message: "Họ tên không được để trống"})
    @Length(3, 64, {message: "Họ tên phải chứa từ 3 đến 64 kí tự"})
    fullName: string;

    @IsEmail(undefined, {message: "Email phải đúng định dạng"})
    email: string;

    @IsString({message: "Mật khẩu không được để trống"})
    @Length(6, 64, {message: "Mật khẩu phải chứa từ 6 đến 64 kí tự"})
    password: string;
}