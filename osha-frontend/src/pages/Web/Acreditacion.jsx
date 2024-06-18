import React from "react";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { AiFillSafetyCertificate } from "react-icons/ai";


function Acreditacion() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <section className="bg-grisFondo">
      <Breadcrumbs
        text={t("accreditation.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        <div className="bg-white  p-5 rounded-lg shadow-lg">
          <h3 className="text-primary"><b>{t("accreditation.title")}</b></h3>
          <Line1 bgColorClassName={"bg-secondary"}/>
          <p className="mt-2">{t("accreditation.content")}</p>
          <button></button>
        </div>
        <div></div>
      </div>
    </section>
    
  );
};

/* ACREDITACION AE */
function AcreditacionAE() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <section className="bg-grisFondo">
      <Breadcrumbs
        text={t("accreditationAE.accreditationAE.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        <div className="bg-white  p-5 rounded-lg shadow-lg">
          <h3 className="text-primary"><b>{t("accreditationAE.accreditationAE.title")}</b></h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-2">{t("accreditationAE.accreditationAE.content")}</p>
          <button></button>
        </div>
        <div className="mt-5 bg-white  p-5 rounded-lg shadow-lg">
          <h3 className="text-primary"><b>{t("accreditationAE.accreditedEducationAE.title")}</b></h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-2">{t("accreditationAE.accreditedEducationAE.content")}</p>
          <button></button>
        </div>
        <div className="mt-5 bg-white  p-5 rounded-lg shadow-lg">
          <h3 className="text-primary"><b>{t("accreditationAE.identity.title")}</b></h3>
          <Line1 bgColorClass={"bg-secondary"}/>
            {t("accreditationAE.identity.content", { returnObjects: true }).map((p, index) => (
              <p>{p}</p>
            ))}
          <button></button>
        </div>
      </div>
    </section>
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
export { Acreditacion, AcreditacionAE }