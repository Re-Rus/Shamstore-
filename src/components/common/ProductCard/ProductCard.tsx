import Rating from "../Rating/Rating";
import { useTranslation } from "react-i18next";
import Badge from "../../ui/Badge/Badge";
import { Crown, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: number;
  category?: string;
  className?: string;
  imageClassName?: string;
  animationClassName?: string;
};

function ProductCard({
  id,
  image,
  title,
  price,
  rating,
  category,
  className = "",
  imageClassName = "",
  animationClassName = "transition-all duration-500 hover:-translate-y-2",
}: ProductCardProps) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  function getBadgeVariant() {
    if (category === "Laptops") {
      return "new";
    }

    if (category === "Accessories") {
      return "discount";
    }

    return "inStock";
  }

  function handleNavigate() {
    navigate(`/Products/${id}`);
  }

  return (
    <div
      onClick={handleNavigate}
      className={`
        bg-white
        rounded-3xl
        overflow-hidden
        border
        border-transparent
        shadow-md
        cursor-pointer
        group
        flex
        flex-col
        h-full
        transition-all
        duration-500
        hover:shadow-2xl
        hover:border-accent
        hover:-translate-y-2
        ${animationClassName}
        ${className}
      `}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">

        {/* BADGE */}
        <div className="absolute top-4 right-4 z-10">
          <Badge
            labelKey="badges.new"
            variant={getBadgeVariant()}
          />
        </div>

        {/* PREMIUM ICON */}
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={(e) => e.stopPropagation()}
            className="
              w-10
              h-10
              rounded-full
              bg-white/90
              backdrop-blur-sm
              shadow-md
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:border
              hover:border-accent
              hover:scale-110
            "
          >
            <Crown
              size={16}
              className="
                text-primary
                transition-colors
                duration-300
                group-hover:text-accent
              "
            />
          </button>
        </div>

        {/* PRODUCT IMAGE */}
        <img
          src={image}
          alt={title}
          className={`
            w-full
            object-cover
            transition-all
            duration-500
            group-hover:scale-110
            ${imageClassName || "h-64"}
          `}
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
        <p
          className="
            text-sm
            text-secondary
            font-medium
          "
        >
          {category}
        </p>

        <h2
          className="
            text-lg
            font-bold
            text-primary
            line-clamp-2
            min-h-[56px]
            transition-colors
            duration-300
            group-hover:text-accent
          "
        >
          {title}
        </h2>

        <Rating rating={rating} />

        {/* FOOTER */}
        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
          "
        >
          <div>
            <p className="text-sm text-secondary">
              {t("products.price")}
            </p>

            <p
              className="
                text-primary
                text-2xl
                font-bold
                transition-colors
                duration-300
                group-hover:text-accent
              "
            >
              ${price}
            </p>
          </div>

          <button
            onClick={(e) => e.stopPropagation()}
            className="
              w-12
              h-12
              rounded-2xl
              bg-white
              border
              border-gray-200
              flex
              items-center
              justify-center
              shadow-sm
              transition-all
              duration-300
              hover:border-accent
              hover:bg-accent
              hover:scale-105
              group/cart
            "
          >
            <ShoppingCart
              size={22}
              className="
                text-primary
                transition-colors
                duration-300
                group-hover/cart:text-white
              "
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;