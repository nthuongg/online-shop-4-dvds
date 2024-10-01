export interface ProductDetailDto {
    id: number;
    title: string;
    price: number;
    description: string;
    genres: string[];
    ratings: number | null;
    numbersOfReviews: number;
    images: string[];
    yearReleased: number;
    stock: number;
}

export interface AlbumProductDetailDto extends ProductDetailDto {
    artist: string;
    artistAvatar: string;
    lengthInSeconds: number;
}

export interface GameProductDetailDto extends ProductDetailDto {
    console: string;
}

export interface MovieProductDetailDto extends ProductDetailDto {
    imdbRatings: number;
    lengthInMinutes: number;
}
