import { IsNumber, IsString, Length, Max, Min } from "class-validator";

export class CategoryCreateDto {

    @IsNumber(undefined, {message: "Loại danh mục không được để trống"})
    @Min(0, {message: "Loại danh mục phải nằm trong khoảng 0 - 2"})
    @Max(2, {message: "Loại danh mục phải nằm trong khoảng 0 - 2"})
    type: number;

    @IsString({message: "Tên danh mục không được để trống"})
    @Length(3, 64, {message: "Tên danh mục phải chứa từ 3 đến 64 kí tự"})
    name: string;
}