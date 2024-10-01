import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ArtistsService {

    public constructor(@InjectRepository(Artist) private artistRepository: Repository<Artist>) {}

    public async findRange({ids}: {ids?: number[]}): Promise<Artist[]> {
        if (!ids)
            return await this.artistRepository.find({
                
                relations: {
                    categories: true,
                },
            });
        else
            return await this.artistRepository.find({
                where: {
                    id: In(ids)
                },
            });
    }

    public async findById(id: number, includeRelations: boolean): Promise<Artist> {
        if (includeRelations)
            return await this.artistRepository.findOne({
                where: {
                    id
                },
                relations: {
                    categories: true
                }
            });
        else
            return await this.artistRepository.findOneBy({id});
    }

    public async create(artistToCreate: Artist): Promise<Artist> {
        return await this.artistRepository.save(artistToCreate);
    }

    public async update(id: number, artistToUpdate: {}): Promise<void> {
        await this.artistRepository.update(id, artistToUpdate);
    }

    public async delete(id: number): Promise<void> {
        await this.artistRepository.delete(id);
    }
}
