import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), CategoriesModule],
  providers: [MoviesService],
  exports: [MoviesService, TypeOrmModule]
})
export class MoviesModule {}
