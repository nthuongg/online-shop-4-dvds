import { IsNumber } from "class-validator";

export class CartCreateDto {

    @IsNumber()
    public productId: number;
}