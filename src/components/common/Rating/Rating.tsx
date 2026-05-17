
/*
========================================
Rating Component
----------------------------------------
Displays static product rating using stars
========================================
*/
type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={
              star <= rating
                ? "text-accent text-lg"
                : "text-gray-300 text-lg"
            }
          >
            ★
          </span>
        ))}
      </div>

      <span className="text-sm text-gray-500">
        ({rating}.0)
      </span>
    </div>
  );
}

export default Rating;