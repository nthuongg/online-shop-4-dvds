import { GameProduct } from "@/models/product";
import { Button, Image, Link } from "@nextui-org/react";
import { FaHeart, FaTv } from "react-icons/fa6";

export default function GameCard({game}: {game: GameProduct}) {
    return (
        <div
            className="relative flex max-w-full flex-none scroll-ml-6 flex-col gap-3 rounded-large p-4 shadow-medium rounded-none bg-transparent shadow-none w-full snap-start"
            color="black"
        >
            <Button isIconOnly color="default" variant="flat" radius="full" aria-label="Save" className="absolute right-6 top-6 z-20" size="sm">
                <FaHeart className="text-default-500" />
            </Button>
            <div className="relative flex h-52 max-h-full w-full flex-col items-center justify-center overflow-visible rounded-medium bg-content2">
                <Image src={game.thumbnailUrl} className="z-0 h-full max-h-[80%] w-full max-w-[80%] overflow-visible object-contain object-center hover:scale-110" removeWrapper />
            </div>
            <div className="flex flex-col gap-3 px-1">
                <div className="flex items-start justify-between">
                    <Link href={`/games/${game.id}`} className="font-medium text-default-700" size="md">{game.title}</Link>
                    <p className="text-medium font-medium text-pink-500">${game.price}</p>
                </div>
                <p className="text-small text-default-500 line-clamp-3">
                    {game.description}
                </p>
                <div className="flex items-center gap-2">
                    <span><FaTv className="text-emerald-500" /></span>
                    <p className="text-small text-default-400">{game.console}</p>
                </div>
                {/* <div className="flex gap-2">
                    <Button color="default" className="w-full font-medium">Add to cart</Button>
                </div> */}
            </div>
        </div>

    );
}