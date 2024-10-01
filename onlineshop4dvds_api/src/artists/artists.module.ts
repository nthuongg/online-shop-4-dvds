import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Artist]), CategoriesModule],
  providers: [ArtistsService],
  controllers: [ArtistsController],
  exports: [ArtistsService, TypeOrmModule]
})
export class ArtistsModule {}
