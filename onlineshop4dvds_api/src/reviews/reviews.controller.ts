import { Controller, Get, Query } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsRequestParams } from 'src/utils/request-params';

@Controller('reviews')
export class ReviewsController {
    public constructor(private reviewsService: ReviewsService) {}

    @Get("ratings")
    public async getRatings(@Query() requestParams: ReviewsRequestParams) {
        return await this.reviewsService.calculateAvgRatings({productId: requestParams.productId});
    }
}
