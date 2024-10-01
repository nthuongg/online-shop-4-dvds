export const formatSongLength = (lengthInSeconds: number): string => {
    const minutes = Math.floor(lengthInSeconds / 60); // Get the whole minutes
    let remainingSeconds: number | string = lengthInSeconds % 60; // Get the remaining seconds

    // Pad the seconds with a leading zero if it's less than 10
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    // Construct and return the formatted string
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds}`;
}

export const formatMovieLength = (minutes: number): string => {
    // Calculate hours and remaining minutes
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    // Format the time
    const formattedTime = hours.toString() + 'h ' + mins.toString() + 'm';
    return formattedTime;
}
