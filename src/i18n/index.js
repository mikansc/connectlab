import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import { initReactI18next } from "react-i18next";
import { formatDate } from "./formatters/full_date";
import { formatTemperature } from "./formatters/temperature";

const development_mode = process.env.NODE_ENV === "development";

const languageDetectorOptions = {
  order: ["cookie", "navigator", "htmlTag"],
  lookupCookie: "i18n",
  caches: ["cookie"],
};

const backendOptions = {
  loadPath: "/locales/{{lng}}/{{ns}}.json",
};

i18n.use(LanguageDetector).use(Backend).use(initReactI18next).init({
  debug: development_mode,
  detection: languageDetectorOptions,
  backend: backendOptions,
  fallbackLng: "pt-BR",
  load: "currentOnly",
});

i18n.services.formatter.add("FULL_DATE", formatDate);
i18n.services.formatter.add("TEMPERATURE", formatTemperature);

export default i18n;
