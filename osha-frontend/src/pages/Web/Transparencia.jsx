import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from '../../components/ui/Line';
import { ListIcon, ListIconWithBg } from "../../components/ui/List";
import { ImageWithInnerBorder } from "../../components/ui/Image";

import { FaBuildingColumns } from "react-icons/fa6";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { HiShieldCheck } from "react-icons/hi2";
import { PiSealCheck } from "react-icons/pi";


function Transparencia() {
  const { t, i18n } = useTranslation("transparencia");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("title")}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 w-full">
        <h1 className="text-primary font-bold">{t("title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10 flex flex-col gap-5 lg:flex-row">
          <div className="">
            <p className="">{t("text")}</p>
            <ListIconWithBg
              list={t("list", { returnObjects: true })}
              icon={<HiShieldCheck style={{color:"var(--primary)"}}/>}
            />
          </div>
          <div className="max-w-2xl">
            <ImageWithInnerBorder
              src="/img-transparencia/osha-safety.jpg"
              alt="transparencia"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-bold text-sky-600 text-center">{t("degrees.title")}</h3>
          <div className="mt-8">
            <ListGrado
              list={t("degrees.list", { returnObjects: true })}
              icon={<HiMiniCheckBadge style={{color:"var(--primary)"}}/>}
            />
          </div>
          <div className="mt-8">
            {t("degrees.text", { returnObjects: true }).map((p, index) => (
              <p key={index} className="mt-3">{p}</p>
            ))}
          </div>
        </div>
        {/* ¿QUÉ SON LOS CURSOS OSHA 10 Y OSHA 30?  */}
        <div className="mt-10 flex flex-col lg:flex-row gap-5">
          <div className="">
            <h3 className="text-primary font-bold">{t("osha10-osha30.title")}</h3>
            <Line1 bgColorClass={"bg-secondary"}/>
            <div className="mt-5">
              {t("osha10-osha30.text", { returnObjects: true }).map((p, index) => (
                <p key={index} className="mt-2">{p}</p>
              ))}
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <ImageWithInnerBorder
              src="/img-transparencia/osha-future.jpg"
              alt="transparencia"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-primary font-bold">{t("difference.title")}</h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-8">{t("difference.text")}</p>
          <div className="mt-4 max-w-md mx-auto">
            <img className="w-full border border-primary rounded" src="/img-transparencia/osha10-osha30.png" alt=""/>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-primary font-bold">{t("osha10.title")}</h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          {t("osha10.text", { returnObjects: true }).map((p, index) => (
            <p key={index} className="mt-2">{p}</p>
          ))}
          <ListIcon
            list={t("osha10.list", { returnObjects: true })}
            icon={<PiSealCheck style={{color:"var(--primary)"}}/>}
          />
        </div>
        <div className="mt-10 flex flex-col lg:flex-row gap-5">
          <div className="">
            <h3 className="text-primary font-bold">{t("osha30.title")}</h3>
            <Line1 bgColorClass={"bg-secondary"}/>
            <div className="mt-5">
              {t("osha30.text", { returnObjects: true }).map((p, index) => (
                <p key={index} className="mt-2">{p}</p>
              ))}
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <ImageWithInnerBorder
              src="/img-transparencia/osharegulations.png"
              alt="transparencia"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-primary font-bold">{t("should-take.title")}</h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-8">{t("should-take.text")}</p>
          <div className="mt-10 flex flex-col lg:flex-row gap-5 lg:gap-10 items-center">
            <div className="py-8 px-8 bg-gray-100 border-l-8 border-primary">
              <p>{t("should-take.card1")}</p>
            </div>
            <div className="max-w-md mx-auto">
              <img className="w-full" src="/img-transparencia/carnet.jpeg" alt=""/>
            </div>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row gap-5 items-center">
            <div className="max-w-md mx-auto">
              <img className="w-full" src="/img-transparencia/certificado.jpeg" alt=""/>
            </div>
            <div className="py-8 px-8 bg-gray-100 border-r-8 border-primary">
              <p>{t("should-take.card2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ListGrado = ({list, icon}) => {
  return(
    <ul className="flex flex-wrap item-center justify-center">
      {list.map((li, index) => (
        <li key={index} className="w-1/2 sm:w-1/3 md:w-1/6 flex flex-col justify-center items-center border px-2 py-4 gap-1">
          <span className="text-2xl">{icon}</span>
          <p className="">{li}</p>
        </li>
      ))}
    </ul>
  );
}
export { Transparencia }