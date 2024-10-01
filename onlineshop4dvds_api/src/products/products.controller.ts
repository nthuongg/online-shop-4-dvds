import { Controller, Get, NotFoundException, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductRequestParams, RequestParams } from 'src/utils/request-params';
import { GenreType } from 'src/utils/genre-type';
import { AlbumProductDto, GameProductDto, MovieProductDto, ProductDto } from './dtos/product.dto';
import { AlbumsService } from 'src/albums/albums.service';
import { MoviesService } from 'src/movies/movies.service';
import { GamesService } from 'src/games/games.service';
import { AlbumProductDetailDto, GameProductDetailDto, MovieProductDetailDto } from './dtos/product-detail.dto';
import { ReviewsService } from 'src/reviews/reviews.service';
import { ImagesService } from 'src/images/images.service';
import { toString } from 'src/utils/console-type';

@Controller('products')
export class ProductsController {
    public constructor(private productsService: ProductsService, private albumsService: AlbumsService, private moviesService: MoviesService, private gamesService: GamesService, private reviewsService: ReviewsService, private imagesService: ImagesService) { }

    @Get()
    public async getRange(@Query() requestParams?: ProductRequestParams) {
        const products = await this.productsService.findRange(requestParams);
        const productsToReturn = new Array<ProductDto>(products.length);
        for (let i = 0; i < products.length; i++) {
            if (products[i].genreType === GenreType.Music) {
                const album = await this.albumsService.findByProductId(products[i].id);
                const albumToReturn: AlbumProductDto = {
                    id: products[i].id,
                    title: products[i].title,
                    thumbnailUrl: products[i].thumbnailUrl,
                    description: products[i].description,
                    artist: album.artist.fullName,
                    artistAvatar: album.artist.avatar,
                    price: Number(products[i].price),
                    genres: products[i].genres.map(g => g.name)
                };
                productsToReturn[i] = albumToReturn;
            } else if (products[i].genreType === GenreType.Movie) {
                const movie = await this.moviesService.findByProductId(products[i].id);
                const movieToReturn: MovieProductDto = {
                    id: products[i].id,
                    title: products[i].title,
                    thumbnailUrl: products[i].thumbnailUrl,
                    description: products[i].description,
                    imdbRatings: movie.imdbRatings,
                    price: Number(products[i].price),
                    genres: products[i].genres.map(g => g.name)
                };
                productsToReturn[i] = movieToReturn;
            } else if (products[i].genreType === GenreType.Game) {
                const game = await this.gamesService.findByProductId(products[i].id);
                const gameToReturn: GameProductDto = {
                    id: products[i].id,
                    title: products[i].title,
                    thumbnailUrl: products[i].thumbnailUrl,
                    description: products[i].description,
                    price: Number(products[i].price),
                    genres: products[i].genres.map(g => g.name),
                    console: toString(game.consoleType)
                };
                productsToReturn[i] = gameToReturn;
            } else {
                throw new Error("Invalid genre type");
            }
        }
        return productsToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const product = await this.productsService.findById(id);
        if (!product) throw new NotFoundException();
        if (product.genreType === GenreType.Music) {
            const album = await this.albumsService.findByProductId(product.id);
            const {ratings, numbersOfReviews} = await this.reviewsService.calculateAvgRatings({productId: product.id});
            const images = await this.imagesService.getRange({productId: product.id});
            const albumProductDetailToReturn: AlbumProductDetailDto = {
                artist: album.artist.fullName,
                artistAvatar: album.artist.avatar,
                lengthInSeconds: album.lengthInSeconds,
                id: product.id,
                title: product.title,
                price: Number(product.price),
                description: product.description,
                genres: product.genres.map(g => g.name),
                ratings,
                numbersOfReviews,
                images: [product.thumbnailUrl, ...images.map(img => img.url)],
                yearReleased: product.yearReleased,
                stock: product.stock
            };
            return albumProductDetailToReturn;
        } else if (product.genreType === GenreType.Movie) {
            const movie = await this.moviesService.findByProductId(product.id);
            const {ratings, numbersOfReviews} = await this.reviewsService.calculateAvgRatings({productId: product.id});
            const images = await this.imagesService.getRange({productId: product.id});
            const movieProductDetailToReturn: MovieProductDetailDto = {
                id: product.id,
                title: product.title,
                price: Number(product.price),
                description: product.description,
                genres: product.genres.map(g => g.name),
                ratings,
                numbersOfReviews,
                images: [product.thumbnailUrl, ...images.map(img => img.url)],
                yearReleased: product.yearReleased,
                stock: product.stock,
                imdbRatings: movie.imdbRatings,
                lengthInMinutes: movie.lengthInMinutes
            };
            return movieProductDetailToReturn;
        } else if (product.genreType === GenreType.Game) {
            const game = await this.gamesService.findByProductId(product.id);
            const {ratings, numbersOfReviews} = await this.reviewsService.calculateAvgRatings({productId: product.id});
            const images = await this.imagesService.getRange({productId: product.id});
            const gameProductDetailToReturn: GameProductDetailDto = {
                id: product.id,
                title: product.title,
                price: Number(product.price),
                description: product.description,
                genres: product.genres.map(g => g.name),
                ratings,
                numbersOfReviews,
                images: [product.thumbnailUrl, ...images.map(img => img.url)],
                yearReleased: product.yearReleased,
                stock: product.stock,
                console: toString(game.consoleType)
            };
            return gameProductDetailToReturn;
        } else {
            throw new Error("Invalid genre type");
        }
    }
}
