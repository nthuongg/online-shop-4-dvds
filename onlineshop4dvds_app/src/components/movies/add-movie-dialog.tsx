import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddMovieForm from "./add-movie-form";

export default function AddMovieDialog({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add movie
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add movie</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <AddMovieForm onAddSuccessfully={onAddSuccessfully} />
                </div>
            </DialogContent>
        </Dialog>
    );
}