export interface Product {
    id: number;
    title: string;
    price: number;
    thumbnailUrl: string;
    description: string;
    genres: string[];
}

export interface AlbumProduct extends Product {
    artist: string;
    artistAvatar: string;
}

export interface MovieProduct extends Product {
    imdbRatings: number;
}

export interface GameProduct extends Product {
    console: string;
}

