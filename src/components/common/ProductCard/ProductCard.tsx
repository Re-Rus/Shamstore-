
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
import Rating from "../Rating/Rating";
import { useTranslation } from "react-i18next";

import Button from "../../ui/Button/Button";
import Badge from "../../ui/Badge/Badge";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  rating: number;
  category?: string;
};

function ProductCard({
  image,
  title,
  price,
  rating,
  category,
}: ProductCardProps) {
  const { t } = useTranslation();

  function getBadgeVariant() {
    if (category === "Laptops") {
      return "new";
    }

    if (category === "Accessories") {
      return "discount";
    }

    return "inStock";
  }

  return (
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        border
        border-transparent
        shadow-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-accent
        group
        flex
        flex-col
        h-full
      "
    >
      {/* IMAGE SECTION */}

      <div className="relative overflow-hidden">
        {/* BADGE */}

        <div className="absolute top-4 right-4 z-10">
          <Badge
            labelKey="badges.new"
            variant={getBadgeVariant()}
          />
        </div>

        {/* WISHLIST */}

        <div className="absolute top-4 left-4 z-10">
          <Button
            variant="ghost"
            icon="❤"
            className="
              bg-white/80
              backdrop-blur-sm
              shadow-md
              hover:scale-110
            "
          />
        </div>

        {/* PRODUCT IMAGE */}

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-64
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* CONTENT */}

      <div
        className="
          p-5
          flex
          flex-col
          flex-grow
          gap-4
        "
      >
        {/* CATEGORY */}

        <p className="text-sm text-secondary font-medium">
          {category}
        </p>

        {/* TITLE */}

        <h2
          className="
            text-lg
            font-bold
            text-gray-800
            line-clamp-2
            min-h-[56px]
          "
        >
          {title}
        </h2>

        {/* RATING */}

        <Rating rating={rating} />

        {/* FOOTER */}

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            gap-3
          "
        >
          {/* PRICE */}

          <div>
            <p className="text-sm text-gray-500">
              {t("products.price")}
            </p>

            <p className="text-primary text-2xl font-bold">
              ${price}
            </p>
          </div>

          {/* BUTTON */}

          <Button className="whitespace-nowrap">
            {t("products.addToCart")}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;