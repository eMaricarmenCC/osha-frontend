import React from "react";
import { useTranslation } from "react-i18next";
import "../../config/i18next.config";


function Acreditacion() {
  const { t, i18n } = useTranslation("prueba");
  return (
    <>
      <p>Acreditacion en construccion</p>
      <p>{t("hola", {name:"alberto"})} </p>
      <button onClick={()=>i18n.changeLanguage("es")}>ESPAÑOL</button>
      <button onClick={()=>i18n.changeLanguage("en")}>INGLES</button>
    </>
  )
}
export default Acreditacion