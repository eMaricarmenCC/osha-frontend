import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Line1 } from "../../components/ui/Line";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { ImageWithInnerBorder } from "../../components/ui/Image";

import { FaBuildingColumns } from "react-icons/fa6";


function Estandares(){
  const { t, i18n } = useTranslation("estandares");
  return (
    <section className="bg-white">
      <Breadcrumbs
        text={"Nosotros"}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <h1 className="text-primary font-bold uppercase">{t("title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10 flex flex-col lg:flex-row gap-5">
          <div>
            <p>{t("p1")}</p>
            <p className="mt-3">{t("p2")}</p>
          </div>
          <div className="mx-auto lg:min-w-[500px] max-w-[600px] flex flex-col items-center">
            <img
              className="border-2 border-primary rounded-lg"
              src="/img/normas-osha.png"
              alt="Estandares osha"
            />
            <div className="mt-10">
              <a className="px-6 py-2 min-w-[120px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
                href="https://www.osha.gov/topics/text-index">
                Conoce los estándares OSHA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estandares;