import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import zhCnCommon from "./locales/zh/common.json";

const I18N_DEBUG = import.meta.env.VITE_I18N_DEBUG;
const resources = {
  en: {
    common: enCommon,
  },
  "zh-CN": {
    common: zhCnCommon,
  },
};

i18n
  .use(LanguageDetector) // 加载语言检测插件
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // 默认语言
    debug: I18N_DEBUG || false,
    detection: {
      // 语言检测配置，默认即可，常用配置示例：
      order: ["cookie", "navigator"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18n;
