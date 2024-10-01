import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { formatMovieLength } from "@/utils/format";
import { Movie } from "@/models/movie";

export default function MoviesTable({movies, onDelete}: {movies: Movie[] | null, onDelete: Function}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Released year</TableHead>
                    <TableHead>Genre(s)</TableHead>
                    <TableHead>Length</TableHead>
                    <TableHead colSpan={2}></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {movies?.map((movie, i) => {
                    return (
                        <TableRow key={movie.id}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{movie.title}</TableCell>
                            <TableCell>{movie.releasedYear}</TableCell>
                            <TableCell>{movie.genres.join(", ")}</TableCell>
                            <TableCell>{formatMovieLength(movie.lengthInMinutes)}</TableCell>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => onDelete(movie.id)} variant="outline" size="icon" title="Delete"><Trash2 className="w-4 h-4" /></Button>
                            </TableCell>
                        </TableRow>)
                })}
            </TableBody>
        </Table>
    );
}