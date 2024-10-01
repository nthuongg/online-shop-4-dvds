import { IsDateString, IsString, Length } from "class-validator";

export class ArtistUpdateDto {
    
    @IsString()
    @Length(1, 64)
    fullName: string;

    @IsDateString()
    dob: Date;

    @IsString()
    @Length(1, 64)
    nationality: string;
}