import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { AlbumsModule } from 'src/albums/albums.module';
import { MoviesModule } from 'src/movies/movies.module';
import { GamesModule } from 'src/games/games.module';
import { ReviewsModule } from 'src/reviews/reviews.module';
import { ImagesModule } from 'src/images/images.module';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), AlbumsModule, MoviesModule, GamesModule, ReviewsModule, ImagesModule],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
