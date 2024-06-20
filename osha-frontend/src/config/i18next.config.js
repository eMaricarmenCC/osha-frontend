import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import labels_es from "../translations/es/labels.json";
import labels_en from "../translations/en/labels.json";
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
import fundacionOshaInstitute_es from "../translations/es/fundacionOshaInstitute.json";
import fundacionOshaInstitute_en from "../translations/en/fundacionOshaInstitute.json";
import inicio_es from "../translations/es/inicio.json";
import inicio_en from "../translations/en/inicio.json";
import membresia_es from "../translations/es/membresia.json";
import membresia_en from "../translations/en/membresia.json";
import nosotros_es from "../translations/es/nosotros.json";
import nosotros_en from "../translations/en/nosotros.json";
import regulaciones_es from "../translations/es/regulaciones.json";
import regulaciones_en from "../translations/en/regulaciones.json";
import representantes_es from "../translations/es/regulaciones.json";
import representantes_en from "../translations/en/regulaciones.json";
import sedes_es from "../translations/es/sedes.json";
import sedes_en from "../translations/en/sedes.json";
import politicapago_es from "../translations/es/politicapago.json";
import politicapago_en from "../translations/en/politicapago.json";
import grados_es from "../translations/es/grados.json";
import grados_en from "../translations/en/grados.json";
import cursos_es from "../translations/es/cursos.json";
import cursos_en from "../translations/en/cursos.json";
import transparencia_es from "../translations/es/transparencia.json";
import transparencia_en from "../translations/en/transparencia.json";


i18n.use(Backend).use(initReactI18next).init({
    interpolation: {escapeValue: false},
    lng: "es",
    fallbacking: 'es',
    resources: {
        es:{
            labels: labels_es,
            prueba: prueba_es,
            acreditacion: acreditacion_es,
            certex: certex_es,
            contactos: contactos_es,
            corporativos: corporativos_es,
            estandares: estandares_es,
            fundacionOshaInstitute: fundacionOshaInstitute_es,
            inicio: inicio_es,
            membresia: membresia_es,
            nosotros: nosotros_es,
            prueba: prueba_es,
            regulaciones: regulaciones_es,
            representantes: representantes_es,
            sedes: sedes_es,
            politicapago: politicapago_es,
            grados: grados_es,
            cursos: cursos_es,
            transparencia: transparencia_es,
        },
        en: {
            labels: labels_en,
            prueba: prueba_en,
            acreditacion: acreditacion_en,
            certex: certex_en,
            contactos: contactos_en,
            corporativos: corporativos_en,
            estandares: estandares_en,
            fundacionOshaInstitute: fundacionOshaInstitute_en,
            inicio: inicio_en,
            membresia: membresia_en,
            nosotros: nosotros_en,
            prueba: prueba_en,
            regulaciones: regulaciones_en,
            representantes: representantes_en,
            sedes: sedes_en,
            politicapago: politicapago_en,
            grados: grados_en,
            cursos: cursos_en,
            transparencia: transparencia_en,
        }
    }
});

export default i18n;