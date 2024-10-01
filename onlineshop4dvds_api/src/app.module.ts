import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { MailModule } from './mail/mail.module';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/category.entity';
import { ArtistsModule } from './artists/artists.module';
import { Artist } from './artists/artist.entity';
import { AlbumsModule } from './albums/albums.module';
import { Album } from './albums/album.entity';
import { MoviesModule } from './movies/movies.module';
import { Movie } from './movies/movie.entity';
import { GamesModule } from './games/games.module';
import { Game } from './games/game.entity';
import { ReviewsModule } from './reviews/reviews.module';
import { Review } from './reviews/review.entity';
import { ImagesModule } from './images/images.module';
import { Image } from './images/image.entity';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { CartsModule } from './carts/carts.module';
import { Cart } from './carts/cart.entity';
import { CartProduct } from './carts/cart-product.entity';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "12345",
      database: "onlineshop4dvds",
      entities: [User, Category, Artist, Album, Movie, Game, Review, Image, Product, Cart, CartProduct],
      synchronize: true, // auto migration on save
    }),
    AuthModule,
    UsersModule,
    MailModule,
    CategoriesModule,
    ArtistsModule,
    AlbumsModule,
    MoviesModule,
    GamesModule,
    ReviewsModule,
    ImagesModule,
    ProductsModule,
    CartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
