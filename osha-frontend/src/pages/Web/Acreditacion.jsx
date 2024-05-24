import React from "react";
import { useTranslation } from "react-i18next";
import { Line1 } from "../../components/ui/Line";


function Acreditacion() {
  const { t, i18n } = useTranslation("labels");
  return (
    <section className="bg-grisFondo">
      <AcreditacionInicio/>
      <AcreditacionAE/>
    </section>
  );
};

/* ACREDITACION */
function AcreditacionInicio() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
      <div className="bg-white  p-5 rounded-lg shadow-lg">
        <h3 className="text-primary"><b>{t("accreditation.title")}</b></h3>
        <Line1 bgColorClassName={"bg-secondary"}/>
        <p className="mt-2">{t("accreditation.content")}</p>
        <button></button>
      </div>
      <div></div>
    </div>
  );
};

/* ACREDITACION AE */
function AcreditacionAE() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
      <div className="bg-white  p-5 rounded-lg shadow-lg">
        <h3 className="text-primary"><b>{t("accreditationAE.accreditationAE.title")}</b></h3>
        <Line1 bgColorClassName={"bg-secondary"}/>
        <p className="mt-2">{t("accreditationAE.accreditationAE.content")}</p>
        <button></button>
      </div>
      <div className="mt-5 bg-white  p-5 rounded-lg shadow-lg">
        <h3 className="text-primary"><b>{t("accreditationAE.accreditedEducationAE.title")}</b></h3>
        <Line1 bgColorClassName={"bg-secondary"}/>
        <p className="mt-2">{t("accreditationAE.accreditedEducationAE.content")}</p>
        <button></button>
      </div>
      <div className="mt-5 bg-white  p-5 rounded-lg shadow-lg">
        <h3 className="text-primary"><b>{t("accreditationAE.identity.title")}</b></h3>
        <Line1 bgColorClassName={"bg-secondary"}/>
          {t("accreditationAE.identity.content", { returnObjects: true }).map((p, index) => (
            <p>{p}</p>
          ))}
        <button></button>
      </div>
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