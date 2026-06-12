import { useTranslation } from "react-i18next";
import Input from "../ui/Input/Input";

export default function ShippingAddressForm() {
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
        {t("checkout.shippingAddress")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2 md:col-span-2">
          <label className="font-medium text-primary">
            {t("checkout.streetAddress")}
          </label>

          <Input
            type="text"
            placeholderKey="checkout.streetAddressPlaceholder"
            roundedClassName="rounded-2xl"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium text-primary">
            {t("checkout.city")}
          </label>

          <Input
            type="text"
            placeholderKey="checkout.cityPlaceholder"
            roundedClassName="rounded-2xl"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium text-primary">
            {t("checkout.country")}
          </label>

          <Input
            type="text"
            placeholderKey="checkout.countryPlaceholder"
            roundedClassName="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}