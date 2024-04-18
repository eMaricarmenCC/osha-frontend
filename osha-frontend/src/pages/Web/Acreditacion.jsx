import React from "react";
import { useTranslation } from "react-i18next";


function Acreditacion() {
  const { t, i18n } = useTranslation("labels");
  return (
    <>
      <p>Acreditacion en construccion</p>
      <p>{t("home", {name:"alberto"})} </p>
      <button onClick={()=>i18n.changeLanguage("es")}>ESPAÑOL</button>
      <button onClick={()=>i18n.changeLanguage("en")}>INGLES</button>
    </>
  )
}
export default Acreditacion