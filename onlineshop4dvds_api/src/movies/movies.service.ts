import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
    public constructor(@InjectRepository(Movie) private movieRepository: Repository<Movie>) {}

    public async findByProductId(productId: number): Promise<Movie | null> {
        return await this.movieRepository.findOne({
            where: {product: {id: productId}},
        });
    }

    public async create(movieToCreate: Movie): Promise<Movie> {
        return await this.movieRepository.save(movieToCreate);
    }

    public async delete(id: number): Promise<void> {
        await this.movieRepository.delete(id);
    }
}
