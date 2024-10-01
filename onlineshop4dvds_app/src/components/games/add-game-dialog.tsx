import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddGameForm from "./add-game-form";

export default function AddGameDialog({onAddSuccessfully}: {onAddSuccessfully: Function}) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add game
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add game</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4">
                    <AddGameForm onAddSuccessfully={onAddSuccessfully} />
                </div>
            </DialogContent>
        </Dialog>
    );
}