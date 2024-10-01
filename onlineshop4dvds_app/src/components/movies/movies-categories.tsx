import MoviesCategoriesTable from "./movies-categories-table";
import { useState, useEffect } from "react";
import { Genre } from "@/models/genre";
import { API_URL } from "@/config";
import { GenreType } from "@/utils/genre-type";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

export default function MoviesCategories() {
    const [moviesCategories, setMoviesCategories] = useState<Genre[] | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=${GenreType.Movie}`)
            .then(res => res.json())
            .then((data: Genre[]) => setMoviesCategories(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Manage movies genres
                    </h2>
                    <p className="text-sm text-muted-foreground">
                    Create, edit or delete movies categories in your website.
                    </p>
                </div>
                <div className="ml-auto mr-4">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add genre
                    </Button>
                </div>
            </div>
            <MoviesCategoriesTable moviesCategories={moviesCategories} />
        </div>
    );
}