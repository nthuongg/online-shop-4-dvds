import { Button } from "../ui/button";
import { Loader2, PlusCircle } from "lucide-react";
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
import { GenreCreate } from "@/models/genre";
import { GenreType } from "@/utils/genre-type";

export default function AddMusicCategoryDialog({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`${API_URL}/categories`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(new GenreCreate(GenreType.Music, name)),
            });

            if (!res.ok) {
                // Display error message
            } else {
                onAddSuccessfully();
            }

        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Dialog onOpenChange={() => setName("")}>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add genre
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add music genre</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
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
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}