export enum GenreType {
    Music = 0,
    Movie = 1,
    Game = 2
}

export const toString = (genreType: GenreType) => {
    switch (genreType) {
        case GenreType.Game:
            return "DVD game";
        case GenreType.Movie:
            return "DVD movie";
        case GenreType.Music:
            return "CD album";
        default:
            throw new Error("Invalid genre type");
    }
}