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
import { Genre } from "@/models/genre";
import { API_URL } from "@/config";
import EditMusicCategoryDialog from "./edit-music-category-dialog";

export default function MusicCategoriesTable({musicCategories, onDeleteSuccessfully, onEditSuccessfully}: {musicCategories: Genre[] | null, onDeleteSuccessfully: Function, onEditSuccessfully: Function}) {
    
    const handleDelete = async (id: number) => {
        try {
          const res = await fetch(`${API_URL}/categories/${id}`, {
            method: "DELETE"
          });

          if (!res.ok) {
            // Display error message
          } else {
            onDeleteSuccessfully();
          }
        } catch (err) {
            console.error(err);
        } 
    } 

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Genre</TableHead>
                    <TableHead>Numbers of songs</TableHead>
                    <TableHead>Numbers of albums</TableHead>
                    <TableHead colSpan={2}></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {musicCategories?.map((c, i) => {
                    return (
                        <TableRow key={c.id}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>
                                <EditMusicCategoryDialog onEditSuccessfully={onEditSuccessfully} id={c.id} currentName={c.name} />
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => handleDelete(c.id)} variant="outline" size="icon" title="Xóa"><Trash2 className="w-4 h-4" /></Button>
                            </TableCell>
                        </TableRow>)
                })}
            </TableBody>
        </Table>
    );
}