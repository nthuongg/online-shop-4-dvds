export interface ProductDetail {
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

export interface AlbumProductDetail extends ProductDetail {
    artist: string;
    artistAvatar: string;
    lengthInSeconds: number;
}

export interface GameProductDetail extends ProductDetail {
    console: string;
}

export interface MovieProductDetail extends ProductDetail {
    imdbRatings: number;
    lengthInMinutes: number;
}
