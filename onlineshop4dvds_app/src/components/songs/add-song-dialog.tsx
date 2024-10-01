import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddAlbumForm from "../albums/add-album-form";
import AddSongForm from "./add-song-form";

export default function AddSongDialog({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add song
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add song</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <AddSongForm onAddSuccessfully={onAddSuccessfully} />
                </div>
            </DialogContent>
        </Dialog>
    );
}