import { IsDateString, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class AlbumCreateDto {

    @IsString()
    @MinLength(1)
    @MaxLength(256)
    title: string;

    @IsDateString()
    released: Date;

    @IsNumber()
    minutes: number;

    @IsNumber()
    seconds: number;

    @IsNumber()
    price: number;

    @IsString()
    coverUrl: string;

    @IsString()
    description: string;

    @IsNumber(undefined, {each: true})
    genres: number[];

    @IsNumber()
    @Min(1)
    artistId: number;
}