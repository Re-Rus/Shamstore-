import { CreditCard, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";
import Input from "../ui/Input/Input";

interface PaymentMethodProps {
  paymentMethod: "card" | "cash";
  setPaymentMethod: (
    value: "card" | "cash"
  ) => void;

  cardNumber: string;
  setCardNumber: (value: string) => void;

  cardHolder: string;
  setCardHolder: (value: string) => void;

  expiryDate: string;
  setExpiryDate: (value: string) => void;

  cvv: string;
  setCvv: (value: string) => void;
}

export default function PaymentMethod({
  paymentMethod,
  setPaymentMethod,
  cardNumber,
  setCardNumber,
  cardHolder,
  setCardHolder,
  expiryDate,
  setExpiryDate,
  cvv,
  setCvv,
}: PaymentMethodProps) {
  const { t } = useTranslation();

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-secondary/10
        shadow-sm
        p-6
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
        {t("checkout.paymentMethod")}
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() =>
            setPaymentMethod("card")
          }
          className={`
            rounded-2xl
            border
            p-5
            flex
            items-center
            gap-3
            transition-all
            duration-300
            hover:border-accent
            hover:shadow-md
            ${
              paymentMethod === "card"
                ? "border-accent bg-accent/5"
                : "border-secondary/20"
            }
          `}
        >
          <CreditCard
            size={20}
            className="text-accent"
          />

          <span className="font-medium text-primary">
            {t("checkout.creditCard")}
          </span>
        </button>

        <button
          type="button"
          onClick={() =>
            setPaymentMethod("cash")
          }
          className={`
            rounded-2xl
            border
            p-5
            flex
            items-center
            gap-3
            transition-all
            duration-300
            hover:border-accent
            hover:shadow-md
            ${
              paymentMethod === "cash"
                ? "border-accent bg-accent/5"
                : "border-secondary/20"
            }
          `}
        >
          <Truck
            size={20}
            className="text-accent"
          />

          <span className="font-medium text-primary">
            {t("checkout.cashOnDelivery")}
          </span>
        </button>
      </div>

      {paymentMethod === "card" && (
        <div className="mt-6 space-y-4">
          <Input
            placeholderKey="checkout.cardNumberPlaceholder"
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(e.target.value)
            }
          />

          <Input
            placeholderKey="checkout.cardHolderPlaceholder"
            value={cardHolder}
            onChange={(e) =>
              setCardHolder(e.target.value)
            }
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholderKey="checkout.expiryDatePlaceholder"
              value={expiryDate}
              onChange={(e) =>
                setExpiryDate(e.target.value)
              }
            />

            <Input
              placeholderKey="checkout.cvvPlaceholder"
              value={cvv}
              onChange={(e) =>
                setCvv(e.target.value)
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}