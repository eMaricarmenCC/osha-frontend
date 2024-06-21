import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line, Line1 } from "../../components/ui/Line";
import { ListPoint } from "../../components/ui/List";

import { AiFillSafetyCertificate } from "react-icons/ai";


function Cumplimiento() {
  const { t, i18n } = useTranslation("regulaciones");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("regulatoryCompliance.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <h1 className="text-primary font-bold uppercase">{t("regulatoryCompliance.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10">
          <div className="bg-gray-200 border-l-8 border-sky-600 rounded-r-lg p-4">
            <span className="text-lg text-gray-500 font-semibold">{t("regulatoryCompliance.subtitle")}</span>
          </div>
          <div className="mt-6">
            {t("regulatoryCompliance.p", { returnObjects: true }).map((p, index) => (
              <p key={index} className="mt-3">{p}</p>
            ))}
          </div>
          {/* Aporte - Áreas */}
          <div className="mt-10">
            <div className="flex flex-col lg:flex-row gap-4">
              <CardFotTex
                title={t("regulatoryCompliance.contribute.title")}
                text={<ListPoint list={t("regulatoryCompliance.contribute.list", { returnObjects: true })}/>}
                textColorClass="text-primary"
                img="/src/assets/engineers/engineer-read.jpg"
              />
              <CardFotTex
                title={t("regulatoryCompliance.practiceAreas.title")}
                text={<ListPoint list={t("regulatoryCompliance.practiceAreas.list", { returnObjects: true })}/>}
                textColorClass="text-primary"
                img="/src/assets/engineers/safetyclad-industrial-workers.png"
              />
            </div>
          </div>
          <div className="mt-10">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardFotTex = ({ title, text, textColorClass, img}) => {
  return(
    <div className="overflow-hidden flex-1 flex-col max-w-xl mx-auto">
      <img className="w-full rounded-2xl" src={img} alt="osha-institute"/>
      <div className={`relative -mt-14 px-10 pt-8 pb-8 bg-white m-5 rounded-xl shadow-lg shadow-gray-300`}>
        <h3 className={`${textColorClass} font-bold text-lg inline-block ease-in-out inline-block mb-1 uppercase`}>{title}</h3>
        <Line/>
        <div className="text-gray-500 text-sm mt-5">{text}</div>
      </div>
    </div>
  );
};

export { Cumplimiento }