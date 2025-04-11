import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { ButtonEmailInfo } from "../../components/ui/Button";

import { AiFillSafetyCertificate } from "react-icons/ai";


function Credenciales() {
  const { t, i18n } = useTranslation("regulaciones");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("certificatesCredentials.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <h1 className="text-primary font-bold uppercase">{t("certificatesCredentials.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-8 flex flex-col lg:flex-row gap-5">
          <div>
            {t("certificatesCredentials.p", { returnObjects: true }).map((li, index) => (
              <p key={index} className="mt-3">{li}</p>
            ))}
          </div>
          <div className="max-w-[600px] mx-auto">
            <img src="/logo/osha-certificado.png" alt="" />
          </div>
        </div>
        <ButtonEmailInfo />
      </div>
    </section>
  );
};

export { Credenciales }