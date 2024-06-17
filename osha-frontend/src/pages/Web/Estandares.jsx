import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Line1 } from "../../components/ui/Line";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { FaBuildingColumns } from "react-icons/fa6";

function Estandares(){
  const { t, i18n } = useTranslation("estandares");
  return (
    <section className="bg-grisFondo">
      <Breadcrumbs
        text={"Nosotros"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h3 className="text-primary"><b>{t("title")}</b></h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-2">{t("p1")}</p>
          <p className="mt-2">{t("p2")}</p>
          <div className="mt-8 mb-5">
            <a href="https://www.osha.gov/topics/text-index" className="mt-4 bg-primary p-3 rounded-lg hover:bg-azulOscuro text-white">Conoce los estándares</a>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Estandares;