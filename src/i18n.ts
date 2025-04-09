import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector'; // Importe o LanguageDetector

i18next
    .use(HttpBackend)
    .use(LanguageDetector) // Adicione o LanguageDetector
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt', // idioma de fallback
        debug: import.meta.env.DEV, // ativa o modo de depuração (opcional)

        backend: {
            loadPath: '/locales/{{lng}}/translation.json', // caminho para os arquivos JSON
        },

        interpolation: {
            escapeValue: false, // O React já faz escape
        },
    });

export default i18next;