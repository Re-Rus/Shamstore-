import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
       className="relative overflow-hidden w-full h-64 bg-gradient-to-r from-hero-start via-hero-mid to-hero-end"
    >
      {/* OVERLAY */}

      <div
        className="
          absolute
        "
      />

      {/* CONTENT */}

      <div
        className="
          absolute
          z-10
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
        "
      >
        <h1
          className="
            text-4xl
            lg:text-5xl
            font-black
            text-white
          "
        >
          {t("products.ourProducts")}
        </h1>

        <p
          className="
            text-white/90
            text-lg
            mt-4
            max-w-2xl
          "
        >
          {t("products.Browse our collection of premium computing products")}
        </p>
      </div>
    </section>
  );
}

export default HeroSection;