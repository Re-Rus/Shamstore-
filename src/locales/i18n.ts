import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";


import commonEN from "./en/common.json";
import commonAR from "./ar/common.json";

import dashboardEN from './en/dashboard.json';
import dashboardAR from './ar/dashboard.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
  
    resources: {
      en: {
        common: commonEN,
        dashboard: dashboardEN
      },
      ar: {
        common: commonAR,
        dashboard: dashboardAR
      }
    },
    
    
    defaultNS: 'common',
    
    fallbackLng: "en", 

    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;