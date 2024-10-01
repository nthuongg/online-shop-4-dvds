import { IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class GameCreateDto {

    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(256)
    public title: string;

    @IsOptional()
    @IsNumber()
    @Min(1900)
    public releasedYear: number;

    @IsOptional()
    @IsString()
    @MinLength(1)
    @MaxLength(256)
    public publisher: string;

    @IsNumber()
    @Min(0)
    public price: number;

    @IsString()
    public coverUrl: string;

    @IsNumber()
    @Min(0)
    public consoleType: number;

    @IsOptional()
    @IsString()
    @MinLength(1)
    public description: string;

    @IsNumber(undefined, {each: true})
    public genresIds: number[];

    @IsOptional()
    @IsNumber()
    @Min(1)
    public gameId: number;
}