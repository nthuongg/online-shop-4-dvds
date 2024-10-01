export interface Genre {
    id: number;
    name: string;
}

export class GenreCreate {
    public type: number;
    public name: string;

    public constructor(type: number, name: string) {
        this.type = type;
        this.name = name;
    }
}

export class GenreUpdate {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }
}