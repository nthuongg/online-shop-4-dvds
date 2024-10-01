import AddSongDialog from "@/components/songs/add-song-dialog";
import AdminLayout from "@/components/layouts/admin-layout";
import SongsTable from "@/components/songs/songs-table";
import { API_URL } from "@/config";
import { Song } from "@/models/song";
import { useEffect, useState } from "react";

export default function Songs() {
    const [songs, setSongs] = useState<Song[] | null>(null);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/songs`)
            .then(res => res.json())
            .then((data: Song[]) => setSongs(data))
            .catch(err => console.error(err));
    }, [flip]);

    const handleDelete = async (songId: number) => {
        try {
            const res = await fetch(`${API_URL}/songs/${songId}`, { method: "DELETE" });
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
                            Manage songs
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Create, edit or delete songs in your website.
                        </p>
                    </div>
                    <div className="ml-auto mr-4">
                        <AddSongDialog onAddSuccessfully={() => setFlip(!flip)} />
                    </div>
                </div>
                <SongsTable onDelete={handleDelete} songs={songs} />
            </div>
        </AdminLayout>
    );
}