import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Game]), CategoriesModule],
  providers: [GamesService],
  exports: [GamesService, TypeOrmModule]
})
export class GamesModule {}
