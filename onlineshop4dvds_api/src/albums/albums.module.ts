import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { CategoriesModule } from 'src/categories/categories.module';
import { ArtistsModule } from 'src/artists/artists.module';
import { ReviewsModule } from 'src/reviews/reviews.module';
import { ImagesModule } from 'src/images/images.module';

@Module({
  imports: [TypeOrmModule.forFeature([Album]), CategoriesModule, ArtistsModule, ReviewsModule, ImagesModule],
  providers: [AlbumsService],
  exports: [AlbumsService, TypeOrmModule]
})
export class AlbumsModule {}
