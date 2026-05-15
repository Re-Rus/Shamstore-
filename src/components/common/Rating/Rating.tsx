import { FaStar, FaRegStar } from "react-icons/fa";

/*
========================================
Rating Component
----------------------------------------
Displays static product rating using stars
========================================
*/

interface RatingProps {
  rating: number;
}

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) =>
        star <= rating ? (
          <FaStar
            key={star}
            className="text-accent text-sm"
          />
        ) : (
          <FaRegStar
            key={star}
            className="text-gray-300 text-sm"
          />
        )
      )}
    </div>
  );
}