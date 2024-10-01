import GamesCategories from "@/components/games/games-categories";
import AdminLayout from "@/components/layouts/admin-layout";
import MoviesCategories from "@/components/movies/movies-categories";
import MusicCategories from "@/components/music/music-categories";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Categories() {
    return (
        <AdminLayout>
            <div>
                <Tabs defaultValue="music" className="w-full h-full space-y-6">
                    <TabsList>
                        <TabsTrigger value="music">Music</TabsTrigger>
                        <TabsTrigger value="movies">Movies</TabsTrigger>
                        <TabsTrigger value="games">Games</TabsTrigger>
                    </TabsList>
                    <TabsContent value="music" className="border-none p-0 outline-none">
                        <MusicCategories />
                    </TabsContent>
                    <TabsContent value="movies" className="border-none p-0 outline-none">
                        <MoviesCategories />
                    </TabsContent>
                    <TabsContent value="games" className="border-none p-0 outline-none">
                        <GamesCategories />
                    </TabsContent>
                </Tabs>
            </div>
        </AdminLayout>
    );
}