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
import { Game } from "@/models/game";

export default function GamesTable({games, onDelete}: {games: Game[] | null, onDelete: Function}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Released year</TableHead>
                    <TableHead>Publisher</TableHead>
                    <TableHead>Genre(s)</TableHead>
                    <TableHead colSpan={2}></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {games?.map((game, i) => {
                    return (
                        <TableRow key={game.id}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{game.title}</TableCell>
                            <TableCell>{game.releasedYear}</TableCell>
                            <TableCell>{game.publisher}</TableCell>
                            <TableCell>{game.genres.join(", ")}</TableCell>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => onDelete(game.id)} variant="outline" size="icon" title="Delete"><Trash2 className="w-4 h-4" /></Button>
                            </TableCell>
                        </TableRow>)
                })}
            </TableBody>
        </Table>
    );
}