import { FaStar } from "react-icons/fa6";

export default function StarRatings({ ratings }: { ratings: number | null | undefined }) {
    if (!ratings || ratings < 1)
        return (
            <>
                <FaStar className="text-default" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
            </>
        );
    if (ratings < 2)
        return (
            <>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
            </>
        );
    if (ratings < 3)
        return (
            <>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
            </>
        );
    if (ratings < 4)
        return (
            <>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-default" />
                <FaStar className="text-default" />
            </>
        );
    if (ratings < 5)
        return (
            <>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-default" />
            </>
        );
    return (
        <>
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
        </>
    );
}