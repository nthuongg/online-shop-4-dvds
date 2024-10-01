import AddArtistDialog from "@/components/artists/add-artist-dialog";
import ArtistsTable from "@/components/artists/artists-table";
import AdminLayout from "@/components/layouts/admin-layout";
import { API_URL } from "@/config";
import { Artist } from "@/models/artist";
import { useEffect, useState } from "react";

export default function Artists() {
    const [artists, setArtists] = useState<Artist[] | null>(null);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        fetch(`${API_URL}/artists`)
            .then(res => res.json())
            .then((data: Artist[]) => setArtists(data))
            .catch(err => console.error(err));
    }, [flip]);

    const handleDateChange = () => setFlip(!flip);

    const handleDelete = (artistId: number) => {
        fetch(`${API_URL}/artists/${artistId}`, {
            method: "DELETE",
        })
        .then(res => {
            if (!res.ok) {
                // show error message
            } else {
                handleDateChange();
            }
        });
    }

    return (
        <AdminLayout>
            <div>
                <div className="flex justify-between items-center mb-10">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Manage artists
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Create, edit or delete artists in your website.
                        </p>
                    </div>
                    <div className="ml-auto mr-4">
                        <AddArtistDialog  onAddSuccessfully={handleDateChange} />
                    </div>
                </div>
                <ArtistsTable onDelete={handleDelete} artists={artists} />
            </div>
        </AdminLayout>
    );
}