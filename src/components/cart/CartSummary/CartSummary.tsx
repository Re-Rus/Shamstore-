import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import {
  ShieldCheck,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

interface CartSummaryProps {
  totalItems: number;
  totalPrice: number;
}

export default function CartSummary({
  totalItems,
  totalPrice,
}: CartSummaryProps) {
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
          mb-8
        "
      >
        {t("cartPage.summary")}
      </h2>

      <div className="space-y-5">
        <div className="flex justify-between">
          <span className="font-medium text-secondary">
            {t("cartPage.items")}
          </span>

          <span className="font-semibold text-primary">
            {totalItems}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-secondary">
            {t("cartPage.subtotal")}
          </span>

          <span className="font-semibold text-primary">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-secondary">
            {t("cartPage.shipping")}
          </span>

          <span className="font-semibold text-primary">
            {t("cartPage.free")}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="font-medium text-secondary">
            {t("cartPage.tax")}
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
            text-primary
          "
        >
          <span>{t("cartPage.total")}</span>

          <span className="text-accent">
            ${finalTotal.toFixed(2)}
          </span>
        </div>
      </div>

      <Link to="/Checkout" className="block mt-8">
        <Button
          className="
            w-full
            h-14
            rounded-2xl
            text-base
            hover:scale-[1.02]
          "
        >
          {t("cartPage.checkout")}
        </Button>
      </Link>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-secondary text-sm">
          <ShieldCheck
            size={16}
            className="text-accent"
          />
          <span>{t("cartPage.secure")}</span>
        </div>

        <div className="flex items-center gap-3 text-secondary text-sm">
          <RotateCcw
            size={16}
            className="text-accent"
          />
          <span>{t("cartPage.returns")}</span>
        </div>

        <div className="flex items-center gap-3 text-secondary text-sm">
          <BadgeCheck
            size={16}
            className="text-accent"
          />
          <span>{t("cartPage.authentic")}</span>
        </div>
      </div>
    </div>
  );
}