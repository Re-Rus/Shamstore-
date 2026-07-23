import { useTranslation } from "react-i18next";
import { ShieldCheck, RotateCcw, BadgeCheck } from "lucide-react";
import Button from "../../ui/Button/Button";
import type { CartItem } from "../../../store/cartStore";

interface OrderSummaryProps {
  items: CartItem[];
  totalPrice: number;
}

export default function OrderSummary({
  items,
  totalPrice,
}: OrderSummaryProps) {
  const { t } = useTranslation();

  const tax = totalPrice * 0.1;
  const finalTotal = totalPrice + tax;

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-secondary/10
        shadow-sm
        p-6
        sticky
        top-24
        transition-all
        duration-300
        hover:border-accent
        hover:shadow-xl
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          text-primary
          mb-6
        "
      >
        {t("orderSummary.title")}
      </h2>

      {/* PRODUCTS */}

      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="
              flex
              items-center
              gap-3
              p-3
              rounded-2xl
              border
              border-secondary/10
              transition-all
              duration-300
              hover:border-accent
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                w-16
                h-16
                rounded-xl
                object-cover
              "
            />

            <div className="flex-1">
              <h3
                className="
                  text-sm
                  font-semibold
                  text-primary
                  line-clamp-1
                "
              >
                {item.title}
              </h3>

              <p className="text-xs text-secondary">
                x{item.quantity}
              </p>
            </div>

            <span
              className="
                font-bold
                text-primary
              "
            >
              $
              {(
                item.price * item.quantity
              ).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* TOTALS */}

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-secondary">
            {t("orderSummary.subtotal")}
          </span>

          <span className="font-semibold text-primary">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-secondary">
            {t("orderSummary.shipping")}
          </span>

          <span className="font-semibold text-primary">
            {t("orderSummary.free")}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-secondary">
            {t("orderSummary.tax")}
          </span>

          <span className="font-semibold text-primary">
            ${tax.toFixed(2)}
          </span>
        </div>

        <hr className="border-secondary/10" />

        <div
          className="
            flex
            justify-between
            items-center
            text-xl
            font-bold
          "
        >
          <span className="text-primary">
            {t("orderSummary.total")}
          </span>

          <span className="text-accent">
            ${finalTotal.toFixed(2)}
          </span>
        </div>
      </div>

      <Button
        type="submit"
        className="
          w-full
          mt-8
          h-14
          rounded-2xl
          hover:scale-[1.02]">
        {t("orderSummary.placeOrder")}
      </Button>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-secondary text-sm">
          <ShieldCheck
            size={16}
            className="text-accent"/>

          <span>
            {t("orderSummary.secure")}
          </span>
        </div>

        <div className="flex items-center gap-3 text-secondary text-sm">
          <RotateCcw
            size={16}
            className="text-accent"
          />

          <span>
            {t("orderSummary.returns")}
          </span>
        </div>

        <div className="flex items-center gap-3 text-secondary text-sm">
          <BadgeCheck
            size={16}
            className="text-accent"
          />

          <span>
            {t("orderSummary.authentic")}
          </span>
        </div>
      </div>
    </div>
  );
}