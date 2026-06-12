import { useTranslation } from "react-i18next";

export default function Chero() {
  const { t } = useTranslation();

  return (
    <section
      className="
        relative
        overflow-hidden
        w-full
        h-64
        bg-gradient-to-br
        from-hero-start
        from-0%
        via-hero-end
        via-65%
        to-hero-mid
        to-100%
      "
    >
      <div
        className="
          absolute
          z-10
          h-full
          w-full
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
            text-secondary
          "
        >
          {t("checkout.title")}
        </h1>

        <p
          className="
            text-white/90
            text-lg
            mt-4
            max-w-2xl
          "
        >
          {t("checkout.des")}
        </p>
      </div>
    </section>
  );
}