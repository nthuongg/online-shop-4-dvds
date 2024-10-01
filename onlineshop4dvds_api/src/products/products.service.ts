import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductRequestParams, RequestParams } from 'src/utils/request-params';

@Injectable()
export class ProductsService {
    public constructor(@InjectRepository(Product) private productRepo: Repository<Product>) {}

    public async findRange(requestParams: ProductRequestParams = null): Promise<Product[]> {
        requestParams ??= new ProductRequestParams();
        const products = await this.productRepo.find({
            where: {genreType: requestParams.genreType},
            relations: {genres: true},
            skip: requestParams.pageSize * (requestParams.pageNumber - 1),
            take: requestParams.pageSize
        });
        return products;
    }

    public async findById(id: number): Promise<Product | null> {
        return await this.productRepo.findOne({
            where: {id},
            relations: {genres: true},
        });
    }

    public async create(productToCreate): Promise<Product> {
        return await this.productRepo.save(productToCreate);
    }

    public async delete(id: number): Promise<void> {
        await this.productRepo.delete(id);
    }
}
