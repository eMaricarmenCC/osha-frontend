import React from "react";
import { useTranslation } from "react-i18next";


function Acreditacion() {
  const { t, i18n } = useTranslation("labels");
  return (
    <>
      <AcreditacionInicio/>
    </>
  );
};

function AcreditacionInicio() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <div className="">
      <div>
        <h3>{t("acreditation.title")}</h3>
        <p className="mt-2">{t("acreditation.content")}</p>
        <button></button>
      </div>
      <div></div>
    </div>
  );
};

function Areas() {
  const { t, i18n } = useTranslation("estandares");
  return(
    <div className="">
      <div>

      </div>
      <div></div>
    </div>
  );
};
export default Acreditacion