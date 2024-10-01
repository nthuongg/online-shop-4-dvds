import MoviesCategoriesTable from "../movies/movies-categories-table";
import { useState, useEffect } from "react";
import { Genre } from "@/models/genre";
import { API_URL } from "@/config";
import { GenreType } from "@/utils/genre-type";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import GamesCategoriesTable from "./games-categories-table";

export default function GamesCategories() {
    const [gamesCategories, setGamesCategories] = useState<Genre[] | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=${GenreType.Game}`)
            .then(res => res.json())
            .then((data: Genre[]) => setGamesCategories(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Manage games genres
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Create, edit or delete games categories in your website.
                    </p>
                </div>
                <div className="ml-auto mr-4">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add genre
                    </Button>
                </div>
            </div>
            <GamesCategoriesTable gamesCategories={gamesCategories} />
        </div>
    );
}