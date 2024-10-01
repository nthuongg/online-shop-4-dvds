import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
    public constructor(@InjectRepository(Image) private imageRepo: Repository<Image>) {}

    public async getRange({productId}: {productId: number}): Promise<Image[]> {
        return await this.imageRepo.findBy({product: {id: productId}});
    }
}
