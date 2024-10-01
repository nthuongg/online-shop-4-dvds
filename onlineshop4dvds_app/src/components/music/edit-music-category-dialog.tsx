import { Button } from "../ui/button";
import { Loader2, Pencil, PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ChangeEvent, useState } from "react";
import { API_URL } from "@/config";
import { GenreUpdate } from "@/models/genre";

export default function EditMusicCategoryDialog({onEditSuccessfully, id, currentName}: {onEditSuccessfully: Function, id: number, currentName: string}) {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState(currentName);
    
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${API_URL}/categories/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(new GenreUpdate(name)),
            });

            if (!res.ok) {
                // Display error message
            } else {
                onEditSuccessfully();
            }

        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon" title="Sửa"><Pencil className="w-4 h-4" /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Sửa thể loại âm nhạc</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Tên thể loại
                        </Label>
                        <Input
                            id="name"
                            className="col-span-3"
                            onChange={handleNameChange}
                            value={name}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" disabled={isLoading} onClick={handleSubmit}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Lưu
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}