import { Link } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import GradientHeading from "../gradient-heading";
import GameCard from "./game-card";
import { useEffect, useState } from "react";
import { API_URL } from "@/config";
import { Genre } from "@/models/genre";
import { GenreType } from "@/utils/genre-type";
import FilterGenres from "../filter-genres";
import { GameProduct } from "@/models/product";

export default function GamesList() {
    const [games, setGames] = useState<GameProduct[] | null>(null);
    const [genres, setGenres] = useState<Genre[] | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=${GenreType.Game}`)
            .then(res => res.json())
            .then((data: Genre[]) => setGenres(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        fetch(`${API_URL}/products?genreType=${GenreType.Game}`)
            .then(res => res.json())
            .then((data: GameProduct[]) => setGames(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
            <div className="flex w-full items-baseline justify-between px-4">
                <GradientHeading title="Games" />
                <div className="lg:max-w-3xl">
                    <FilterGenres genres={genres} />
                </div>
                <Link
                    isExternal
                    showAnchorIcon
                    href="/games"
                    anchorIcon={<FaArrowRightLong />}
                    className="gap-x-2 font-semibold"
                    color="primary"
                >
                    See all
                </Link>
            </div>

            <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {games?.map(game => <GameCard key={game.id} game={game} />)}
            </div>
        </div>
    );
}