import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";

import { AiFillSafetyCertificate } from "react-icons/ai";


function PoliticaPago() {
  const { t, i18n } = useTranslation("politicapago");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("registrationPaymentCancellationPolicy.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      {/*<div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <h1 className="text-primary font-bold">{t("educationalQuality.title")}</h1>
        <Line1 bgColorClassName={"bg-secondary"}/>
        {t("educationalQuality.p", { returnObjects: true }).map((li, index) => (
          <li key={index} className="flex gap-1 text-primary">
            <p className="mt-3">{li}</p>
          </li>
        ))}
        </div>*/}
    </section>
  );
};

export { PoliticaPago }