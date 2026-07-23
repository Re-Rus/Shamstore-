import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function LanguageSwitcher() {
  // استخدام i18n من مكتبة react-i18next بدلاً من useState المحلي
  const { i18n } = useTranslation();

  // ميزة تذكر اللغة وتغيير اتجاه الصفحة (RTL / LTR)
  useEffect(() => {
    const currentLang = i18n.language;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLang;
  }, [i18n.language]);

  // دالة لتغيير اللغة باستخدام i18n
  function toggleLanguage() {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  }

  return (
    <div className="flex items-center justify-end gap-4">
      {/* زر تغيير اللغة مع الحفاظ على تصميمك الخاص */}
      <button
        onClick={toggleLanguage}
        className="w-[50px] h-[30px] flex items-center justify-center bg-gray-300 border-none cursor-pointer"
        style={{
          backgroundImage: `url(${
            i18n.language === "en" ? "/flag-en.png" : "/flag-ar.png"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        title={i18n.language === "en" ? "Change to Arabic" : "تغيير للإنجليزية"}
      ></button>
    </div>
  );
}