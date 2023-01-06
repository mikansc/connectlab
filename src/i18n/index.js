import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { formatDate } from "./formatters/full_date";

i18n.use(Backend).use(initReactI18next).init({
  debug: true,
  fallbackLng: "pt-BR",
  loadPath: "/locales/{{lng}}/{{ns}}.json",
});

i18n.services.formatter.add("FULL_DATE", formatDate);

export default i18n;
