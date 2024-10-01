import MusicCategoriesTable from "./music-categories-table";
import { useState, useEffect } from "react";
import { Genre } from "@/models/genre";
import { API_URL } from "@/config";
import AddMusicCategoryDialog from "./add-music-category-dialog";
import { GenreType } from "@/utils/genre-type";


export default function MusicCategories() {
    const [musicCategories, setMusicCategories] = useState<Genre[] | null>(null);
    const [flip, setFlip] = useState(false);

    const handleDataChange = () => {
        setFlip(!flip);
    }

    useEffect(() => {
        fetch(`${API_URL}/categories?type=${GenreType.Music}`)
            .then(res => res.json())
            .then((data: Genre[]) => setMusicCategories(data))
            .catch(err => console.error(err));
    }, [flip]);

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Manage music genres
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Create, edit or delete music categories in your website.
                    </p>
                </div>
                <div className="ml-auto mr-4">
                    <AddMusicCategoryDialog onAddSuccessfully={handleDataChange} />
                </div>
            </div>
            <MusicCategoriesTable musicCategories={musicCategories} onDeleteSuccessfully={handleDataChange} onEditSuccessfully={handleDataChange} />
        </div>
    );
}