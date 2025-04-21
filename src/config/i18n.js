import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translationsEs } from "../traducciones/translationsEs";
import { translationsEn } from "../traducciones/translationsEn";

// Detectar el idioma del navegador
const browserLang = navigator.language.split("-")[0];

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: translationsEs }, // Español
    en: { translation: translationsEn }, // Inglés
  },
  lng: browserLang || "es", // Usar el idioma del navegador o "es" como respaldo
  fallbackLng: "es", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // No escapar valores (para permitir HTML)
  },
});

export default i18n;