import { Song } from "@/models/song";
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
import { formatSongLength } from "@/utils/format";

export default function SongsTable({songs, onDelete}: {songs: Song[] | null, onDelete: Function}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Released</TableHead>
                    <TableHead>Artist</TableHead>
                    <TableHead>Album</TableHead>
                    <TableHead>Genre(s)</TableHead>
                    <TableHead>Length</TableHead>
                    <TableHead colSpan={2}></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {songs?.map((song, i) => {
                    return (
                        <TableRow key={song.id}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{song.title}</TableCell>
                            <TableCell>{new Date(song.released).toLocaleDateString("vi-VN")}</TableCell>
                            <TableCell>{song.artist}</TableCell>
                            <TableCell>{song.album || ""}</TableCell>
                            <TableCell>{song.genres.join(", ")}</TableCell>
                            <TableCell>{formatSongLength(song.lengthInSeconds)}</TableCell>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => onDelete(song.id)} variant="outline" size="icon" title="Delete"><Trash2 className="w-4 h-4" /></Button>
                            </TableCell>
                        </TableRow>)
                })}
            </TableBody>
        </Table>
    );
}