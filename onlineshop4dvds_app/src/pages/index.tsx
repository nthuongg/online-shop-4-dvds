import AlbumsList from "@/components/albums/albums-list";
import ScrollingBanner from "@/components/scrolling-banner";
import MoviesList from "@/components/movies/movies-list";
import GamesList from "@/components/games/games-list";
import HomeLayout from "@/components/layouts/home-layout";

export default function Home() {


  return (
    <HomeLayout>
      <div className="flex items-center justify-center p-4">
        <ScrollingBanner />
      </div>
      <div className="flex items-center justify-center p-4">
        <AlbumsList />
      </div>
      <div className="flex items-center justify-center p-4">
        <MoviesList />
      </div>
      <div className="flex items-center justify-center p-4">
        <GamesList />
      </div>
    </HomeLayout>
  );
}
