import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GamesService {
    public constructor(@InjectRepository(Game) private gameRepository: Repository<Game>) { }

    public async findByProductId(productId: number): Promise<Game | null> {
        return await this.gameRepository.findOneBy({product: {id: productId}});
    }
}
