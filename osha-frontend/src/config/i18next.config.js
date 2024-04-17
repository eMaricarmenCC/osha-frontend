import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import prueba_es from "../translations/es/prueba.json";
import prueba_en from "../translations/en/prueba.json";
import acreditacion_es from "../translations/es/acreditacion.json";
import acreditacion_en from "../translations/en/acreditacion.json";
import certex_es from "../translations/es/certex.json";
import certex_en from "../translations/en/certex.json";
import contactos_es from "../translations/es/contactos.json";
import contactos_en from "../translations/en/contactos.json";
import corporativos_es from "../translations/es/corporativos.json";
import corporativos_en from "../translations/en/corporativos.json";
import estandares_es from "../translations/es/estandares.json";
import estandares_en from "../translations/en/estandares.json";
import inicio_es from "../translations/es/inicio.json";
import inicio_en from "../translations/en/inicio.json";
import membresia_es from "../translations/es/membresia.json";
import membresia_en from "../translations/en/membresia.json";
import nosotros_es from "../translations/es/nosotros.json";
import nosotros_en from "../translations/en/nosotros.json";
import sedes_es from "../translations/es/sedes.json";
import sedes_en from "../translations/en/sedes.json";


i18n.use(Backend).use(initReactI18next).init({
    interpolation: {escapeValue: false},
    lng: "es",
    fallbacking: 'es',
    resources: {
        es:{
            prueba: prueba_es,
            acreditacion: acreditacion_es,
            certex: certex_es,
            contactos: contactos_es,
            corporativos: corporativos_es,
            estandares: estandares_es,
            inicio: inicio_es,
            membresia: membresia_es,
            nosotros: nosotros_es,
            prueba: prueba_es,
            sedes: sedes_es,
        },
        en: {
            prueba: prueba_en,
            acreditacion: acreditacion_en,
            certex: certex_en,
            contactos: contactos_en,
            corporativos: corporativos_en,
            estandares: estandares_en,
            inicio: inicio_en,
            membresia: membresia_en,
            nosotros: nosotros_en,
            prueba: prueba_en,
            sedes: sedes_en,
        }
    }
});

export default i18n;