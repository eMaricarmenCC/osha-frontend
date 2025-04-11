import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { ListIcon } from "../../components/ui/List";
import { ImageWithInnerBorder } from "../../components/ui/Image";

import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaPersonCircleCheck } from "react-icons/fa6";


function Conducta() {
  const { t, i18n } = useTranslation("regulaciones");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("codeProfessionalConduct.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <h1 className="text-primary font-bold uppercase">{t("codeProfessionalConduct.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-8 p-5 bg-gray-100 rounded-lg">
          <p>{t("codeProfessionalConduct.description")}</p>
        </div>
        <div className="mt-8 text-xl flex flex-col lg:flex-row gap-5">
          <ListIcon
            list={t("codeProfessionalConduct.list", { returnObjects: true })}
            icon={<FaPersonCircleCheck style={{color:"var(--primary)"}} />}
          />
          <div className="max-w-2xl mx-auto">
            <ImageWithInnerBorder
              src="/engineers/enginner-legal.png"
              alt="transparencia"
            />
          </div>
        </div>
        <div className="mt-8 p-5 rounded-lg bg-gray-100">
          <p>{t("codeProfessionalConduct.p")}</p>
        </div>
      </div>
    </section>
  );
};

export { Conducta }