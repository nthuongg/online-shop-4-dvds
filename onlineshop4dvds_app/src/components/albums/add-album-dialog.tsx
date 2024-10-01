import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddAlbumForm from "./add-album-form";

export default function AddAlbumDialog({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add album
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add album</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <AddAlbumForm onAddSuccessfully={onAddSuccessfully} />
                </div>
            </DialogContent>
        </Dialog>
    );
}