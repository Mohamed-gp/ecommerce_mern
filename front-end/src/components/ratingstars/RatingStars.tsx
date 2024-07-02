import { FaStar, FaStarHalf } from "react-icons/fa6";
interface RatingStarsProps {
  starsNumber: number;
}

export default function RatingStars({ starsNumber }: RatingStarsProps) {
  return (
    <div className="flex gap-1 items-center">
      {starsNumber <= 0 ? (
        <FaStar />
      ) : starsNumber > 0 && starsNumber < 1 ? (
        <FaStarHalf className="text-yellow-400" />
      ) : (
        <FaStar className="text-yellow-300" />
      )}
      {starsNumber <= 1 ? (
        <FaStar />
      ) : starsNumber > 1 && starsNumber < 2 ? (
        <FaStarHalf className="text-yellow-400" />
      ) : (
        <FaStar className="text-yellow-300" />
      )}
      {starsNumber <= 2 ? (
        <FaStar />
      ) : starsNumber > 2 && starsNumber < 3 ? (
        <FaStarHalf className="text-yellow-400" />
      ) : (
        <FaStar className="text-yellow-300" />
      )}
      {starsNumber <= 3 ? (
        <FaStar />
      ) : starsNumber > 3 && starsNumber < 4 ? (
        <FaStarHalf className="text-yellow-400" />
      ) : (
        <FaStar className="text-yellow-300" />
      )}
      {starsNumber <= 4 ? (
        <FaStar />
      ) : starsNumber > 4 && starsNumber < 5 ? (
        <FaStarHalf className="text-yellow-400" />
      ) : (
        <FaStar className="text-yellow-300" />
      )}
      ({starsNumber})
    </div>
  );
}
