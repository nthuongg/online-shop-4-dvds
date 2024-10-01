import AddGameDialog from "@/components/games/add-game-dialog";
import GamesTable from "@/components/games/games-table";
import AdminLayout from "@/components/layouts/admin-layout";
import { API_URL } from "@/config";
import { Game } from "@/models/game";
import { useEffect, useState } from "react";

export default function Movies() {
    const [games, setGames] = useState<Game[] | null>(null);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/games`)
            .then(res => res.json())
            .then((data: Game[]) => setGames(data))
            .catch(err => console.error(err));
    }, [flip]);

    const handleDelete = async (gameId: number) => {
        try {
            const res = await fetch(`${API_URL}/games/${gameId}`, { method: "DELETE" });
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
                            Manage games
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Create, edit or delete games in your website.
                        </p>
                    </div>
                    <div className="ml-auto mr-4">
                        <AddGameDialog onAddSuccessfully={() => setFlip(!flip)} />
                    </div>
                </div>
                <GamesTable onDelete={handleDelete} games={games} />
            </div>
        </AdminLayout>
    );
}