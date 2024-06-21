import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { ImageWithInnerBorder } from "../../components/ui/Image";
import { ButtonEmailInfo } from "../../components/ui/Button";

import { AiFillSafetyCertificate } from "react-icons/ai";


function ConoceOsha() {
  const { t, i18n } = useTranslation("regulaciones");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("oshaInstitute.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <h1 className="text-primary font-bold uppercase">{t("oshaInstitute.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-8 max-w-2xl mx-auto">
          <ImageWithInnerBorder
            src="/src/assets/img-nosotros/nosotros.jpg"
            alt="transparencia"
          />
        </div>
        <div className="mt-8">
          {t("oshaInstitute.p", { returnObjects: true }).map((p, index) => (
            <p key={index} className="mt-3">{p}</p>
          ))}
        </div>
        <ButtonEmailInfo />
      </div>
    </section>
  );
};

export { ConoceOsha }