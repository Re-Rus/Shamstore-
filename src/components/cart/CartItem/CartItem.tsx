import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "../../../store/cartStore";

interface CartItemProps {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-secondary/10
        shadow-sm
        p-5
        flex
        flex-col
        md:flex-row
        items-center
        gap-6
        transition-all
        duration-300
        hover:border-accent
        hover:shadow-xl
        hover:-translate-y-1
      "
    >
      {/* IMAGE */}

      <img
        src={item.image}
        alt={item.title}
        className="
          w-32
          h-32
          rounded-2xl
          object-cover
          transition-transform
          duration-300
          hover:scale-105
        "
      />

      {/* INFO */}

      <div className="flex-1">
        <h3
          className="
            text-xl
            font-bold
            text-primary
            transition-colors
            duration-300
            hover:text-accent
          "
        >
          {item.title}
        </h3>

        <p className="text-secondary mt-2">
          ${item.price}
        </p>
      </div>

      {/* QUANTITY */}

      <div
        className="
          flex
          items-center
          border
          border-secondary/20
          rounded-2xl
          overflow-hidden
        "
      >
        <button
          onClick={onDecrease}
          className="
            w-12
            h-12
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:bg-accent
            hover:text-white
          "
        >
          <Minus size={18} />
        </button>

        <span
          className="
            w-12
            text-center
            font-semibold
            text-primary
          "
        >
          {item.quantity}
        </span>

        <button
          onClick={onIncrease}
          className="
            w-12
            h-12
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:bg-accent
            hover:text-white
          "
        >
          <Plus size={18} />
        </button>
      </div>

      {/* TOTAL */}

      <div
        className="
          text-2xl
          font-bold
          text-primary
          min-w-[120px]
          text-center
        "
      >
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      {/* DELETE */}

      <button
        onClick={onRemove}
        className="
          w-12
          h-12
          rounded-2xl
          border
          border-secondary/20
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:bg-accent
          hover:border-accent
          hover:text-white
          hover:scale-105
        "
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}