import Rating from "../Rating/Rating";
import { useTranslation } from "react-i18next";
import Badge from "../../ui/Badge/Badge";
import {  Crown,ShoppingCart } from 'lucide-react';
type ProductCardProps = {
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
      className={`
        bg-white
        rounded-3xl
        overflow-hidden
        border
        border-transparent
        shadow-md
        transition-all
        hover:shadow-2xl
        hover:border-accent
        ${animationClassName}
         hover:shadow-2xl",
        group
        flex
        flex-col
        h-full
        ${className} 
      `}
    >
      {/* IMAGE CONTAINER */}
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
          <button
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
              text-accent
              transition-all
              duration-300
              hover:scale-110
              hover:border
              hover:border-accent
            "
          >
            <Crown size={15} className="text-primary"/> 
          </button>
        </div>

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className={`
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
            ${imageClassName ? imageClassName : "h-64"}
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
        <p className="text-sm text-secondary font-medium">
          {category}
        </p>

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

          {/* CART ICON */}
          <button
            className="
              w-12
              h-12
              p-0
              flex
              items-center
              justify-center
              rounded-2xl
              bg-white
              border
              border-gray-200
              text-accent
              text-xl
              shadow-sm
              transition-all
              duration-300
              hover:border-accent
              hover:scale-105">
              <ShoppingCart  size={25} className="text-primary" />
                    
             </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;