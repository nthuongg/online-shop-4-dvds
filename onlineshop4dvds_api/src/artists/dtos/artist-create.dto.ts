import { IsDateString, IsNumber, IsString, Length } from "class-validator";

export class ArtistCreateDto {

    @IsString()
    @Length(1, 64)
    fullName: string;

    @IsDateString()
    dob: Date;

    @IsString()
    @Length(1, 64)
    nationality: string;

    @IsNumber(undefined, {each: true})
    genres: number[];
}