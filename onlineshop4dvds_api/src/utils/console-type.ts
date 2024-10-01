export enum ConsoleType {
    PS3, // 0
    PS4, // 1
    PS5, // 2
    XboxOne, // 3
    XboxSeriesS, // 4
    XboxSeriesX // 5
}

export function toString(consoleType: ConsoleType): string {
    switch (consoleType) {
        case ConsoleType.PS3:
            return "PS3";
        case ConsoleType.PS4:
            return "PS4";
        case ConsoleType.PS5:
            return "PS5";
        case ConsoleType.XboxOne:
            return "Xbox One";
        case ConsoleType.XboxSeriesS:
            return "Xbox Series S";
        case ConsoleType.XboxSeriesX:
            return "Xbox Series X";
        default:
            throw new Error("Invalid console type");
    }
}