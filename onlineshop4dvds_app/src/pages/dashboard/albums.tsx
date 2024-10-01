import AddAlbumDialog from "@/components/albums/add-album-dialog";
import AlbumsTable from "@/components/albums/albums-table";
import AdminLayout from "@/components/layouts/admin-layout";
import { API_URL } from "@/config";
import { Album } from "@/models/album";
import { useEffect, useState } from "react";

export default function Albums() {
    const [albums, setAlbums] = useState<Album[] | null>(null);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/albums`)
            .then(res => res.json())
            .then((data: Album[]) => setAlbums(data))
            .catch(err => console.error(err));
    }, [flip]);

    const handleDateChange = () => setFlip(!flip);

    const handleDelete = (albumId: number) => {
        fetch(`${API_URL}/albums/${albumId}`, {method: "DELETE"})
            .then(res => {
                if (res.ok) handleDateChange();
            })
            .catch(err => console.error(err));
    }

    return (
        <AdminLayout>
            <div>
                <div className="flex justify-between items-center mb-10">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Manage albums
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Create, edit or delete albums in your website.
                        </p>
                    </div>
                    <div className="ml-auto mr-4">
                        <AddAlbumDialog onAddSuccessfully={handleDateChange} />
                    </div>
                </div>
                <AlbumsTable onDelete={handleDelete} albums={albums} />
            </div>
        </AdminLayout>
    );
}