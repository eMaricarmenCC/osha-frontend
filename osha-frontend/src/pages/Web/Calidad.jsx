import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { ImageWithInnerBorder } from "../../components/ui/Image";
import { ButtonEmailInfo } from "../../components/ui/Button";

import { AiFillSafetyCertificate } from "react-icons/ai";


function Calidad() {
  const { t, i18n } = useTranslation("regulaciones");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("educationalQuality.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <h1 className="text-primary font-bold uppercase">{t("educationalQuality.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-8 flex flex-col lg:flex-row gap-5">
          <div>
            {t("educationalQuality.p", { returnObjects: true }).map((li, index) => (
              <p key={index} className="mt-3">{li}</p>
            ))}
          </div>
          <div className="min-w-[400px] max-w-3xl mx-auto">
            <ImageWithInnerBorder
              src="/img/SafetyHealthWorkTrainer.png"
              alt="transparencia"
            />
          </div>
        </div>
        <ButtonEmailInfo />
      </div>
    </section>
  );
};

export { Calidad }