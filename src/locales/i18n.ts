import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en/common.json";
import ar from "./ar/common.json";

i18n
  .use(LanguageDetector) // 2. إخبار i18next باستخدام كاشف اللغة
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
  
    fallbackLng: "en", // إذا فشل المتصفح في معرفة اللغة، سيختار الإنجليزية
    
    detection: {
      // الترتيب الذي سيبحث فيه عن اللغة (المخزنة أولاً ثم لغة المتصفح)
      order: ['localStorage', 'cookie', 'htmlTag', 'navigator'],
      // مكان تخزين اللغة المختارة
      caches: ['localStorage'], 
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;