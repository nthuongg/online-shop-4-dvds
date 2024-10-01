import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddArtistForm from "./add-artist-form";

export default function AddArtistDialog({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add artist
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add artist</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <AddArtistForm onAddSuccessfully={onAddSuccessfully} />
                </div>
            </DialogContent>
        </Dialog>
    );
}