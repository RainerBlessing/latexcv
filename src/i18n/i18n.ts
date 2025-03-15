import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';

// The translations
const resources = {
  en: {
    translation: translationEN
  },
  de: {
    translation: translationDE
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'de', // Set German as the default language
    debug: process.env.NODE_ENV === 'development',

    interpolation: {
      escapeValue: false // not needed for React as it escapes by default
    },

    // language detection options
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;
