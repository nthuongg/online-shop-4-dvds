import AddMovieDialog from "@/components/movies/add-movie-dialog";
import AdminLayout from "@/components/layouts/admin-layout";
import MoviesTable from "@/components/movies/movies-table";
import { API_URL } from "@/config";
import { Movie } from "@/models/movie";
import { useEffect, useState } from "react";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[] | null>(null);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/movies`)
            .then(res => res.json())
            .then((data: Movie[]) => setMovies(data))
            .catch(err => console.error(err));
    }, [flip]);

    const handleDelete = async (songId: number) => {
        try {
            const res = await fetch(`${API_URL}/movies/${songId}`, { method: "DELETE" });
            if (res.ok)
                setFlip(!flip);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <AdminLayout>
            <div>
                <div className="flex justify-between items-center mb-10">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Manage movies
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Create, edit or delete movies in your website.
                        </p>
                    </div>
                    <div className="ml-auto mr-4">
                        <AddMovieDialog onAddSuccessfully={() => setFlip(!flip)} />
                    </div>
                </div>
                <MoviesTable onDelete={handleDelete} movies={movies} />
            </div>
        </AdminLayout>
    );
}