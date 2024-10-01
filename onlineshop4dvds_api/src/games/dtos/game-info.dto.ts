export interface GameInfoDto {
    id: number;
    title: string;
    releasedYear: number;
    publisher: string;
    genres: string[];
    price: number;
    description: string;
    coverUrl: string;
    consoleType: string;
    stock: number;
    imgUrl: string;
}