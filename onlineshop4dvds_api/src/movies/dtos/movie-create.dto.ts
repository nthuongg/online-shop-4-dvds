import { IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class MovieCreateDto {
    @IsString()
    @MinLength(1)
    @MaxLength(256)
    public title: string;

    @IsNumber()
    @Min(1900)
    public releasedYear: number;

    @IsNumber()
    @Min(0)
    public hours: number;

    @IsNumber()
    @Min(0)
    public minutes: number;

    @IsNumber()
    public price: number;

    @IsNumber()
    public rating: number;

    @IsString()
    public description: string;

    @IsString()
    public coverUrl: string;

    @IsNumber(undefined, {each: true})
    public genresIds: number[];
}