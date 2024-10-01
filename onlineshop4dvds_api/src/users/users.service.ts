import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    public constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    public async create(userToCreate: User): Promise<User> {
        return await this.userRepository.save(userToCreate);
    }

    public async findByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findOneBy({normalizedEmail: email.toUpperCase()});
    }

    public async update (id: number, options: {}): Promise<void> {
        await this.userRepository.update(id, options);
    }
}
