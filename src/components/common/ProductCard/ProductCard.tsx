import Rating from "../Rating/Rating";
import { useTranslation } from "react-i18next";

/*
========================================
ProductCard Component
----------------------------------------
Displays:
- Product image
- Product title
- Product price
- Product rating
========================================
*/

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  rating: number;
}

export default function ProductCard({
  title,
  image,
  price,
  rating,
}: ProductCardProps) {

  const { t } = useTranslation();

  return (
    <div
      className="
        bg-white
        rounded-lg
        border
        border-border
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        hover:scale-[1.02]
        transition-all
        duration-300
      "
    >
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      {/* Product Content */}
      <div className="p-4 space-y-3">

        {/* Product Title */}
        <h3 className="text-lg font-semibold text-foreground">
          {title}
        </h3>

        {/* Product Rating */}
        <Rating rating={rating} />

        {/* Product Price */}
        <p className="text-primary font-bold text-xl">
          {t("products.price")} ${price}
        </p>
      </div>
    </div>
  );
}