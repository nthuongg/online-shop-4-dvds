export interface MovieDto {
    id: number;
    title: string;
    genres: string[];
    price: number;
    rating: number;
    description: string;
    coverUrl: string;
}

export interface MovieInfoDto {
    id: number;
    title: string;
    releasedYear: number;
    lengthInMinutes: number;
    genres: string[];
    price: number;
    rating: number;
    description: string;
    coverUrl: string;
    imgUrl: string;
    stock: number;
}