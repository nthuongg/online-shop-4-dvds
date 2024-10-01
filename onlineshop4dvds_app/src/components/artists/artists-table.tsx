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
import { API_URL } from "@/config";
import { Artist } from "@/models/artist";

export default function ArtistsTable({artists, onDelete}: {artists: Artist[] | null, onDelete: Function}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Full name</TableHead>
                    <TableHead>Date of birth</TableHead>
                    <TableHead>Nationality</TableHead>
                    <TableHead>Genres</TableHead>
                    <TableHead colSpan={2}></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {artists?.map((artist, i) => {
                    return (
                        <TableRow key={artist.id}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{artist.fullName}</TableCell>
                            <TableCell>{new Date(artist.dob).toLocaleDateString("vi-VN")}</TableCell>
                            <TableCell>{artist.nationality}</TableCell>
                            <TableCell>{artist.genres.join(", ")}</TableCell>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => onDelete(artist.id)} variant="outline" size="icon" title="Delete"><Trash2 className="w-4 h-4" /></Button>
                            </TableCell>
                        </TableRow>)
                })}
            </TableBody>
        </Table>
    );
}