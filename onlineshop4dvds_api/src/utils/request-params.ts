import { Type } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class RequestParams {

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(50)
    @Type(() => Number)
    pageSize: number = 10;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Type(() => Number)
    pageNumber: number = 1;
}

export class ProductRequestParams extends RequestParams {
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    genreType: number;
}

export class GenresRequestParams extends RequestParams {

    @IsOptional()
    @IsNumber()
    @Min(0)
    @Type(() => Number)
    type?: number;
}

export class ReviewsRequestParams extends RequestParams {

    @IsNumber()
    @Min(0)
    @Type(() => Number)
    genreType: number;

    @IsNumber()
    @Min(1)
    @Type(() => Number)
    productId: number;
}