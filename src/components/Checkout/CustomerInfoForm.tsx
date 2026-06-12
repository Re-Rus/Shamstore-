import { useTranslation } from "react-i18next";
import Input from "../ui/Input/Input";

export default function CustomerInfoForm() {
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
        {t("checkout.customerInfo")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="font-medium text-primary">
            {t("checkout.fullName")}
          </label>

          <Input
            type="text"
            placeholderKey="checkout.fullNamePlaceholder"
            roundedClassName="rounded-2xl"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium text-primary">
            {t("checkout.email")}
          </label>

          <Input
            type="email"
            placeholderKey="checkout.emailPlaceholder"
            roundedClassName="rounded-2xl"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="font-medium text-primary">
            {t("checkout.phone")}
          </label>

          <Input
            type="tel"
            placeholderKey="checkout.phonePlaceholder"
            roundedClassName="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}