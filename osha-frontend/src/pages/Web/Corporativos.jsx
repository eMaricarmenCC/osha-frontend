import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { List, ListResponsive, ListResponsive3Col } from "../../components/ui/List";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";

import { BsPatchCheck } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";




function Corporativos() {
  const { t, i18n } = useTranslation("corporativos");
  return(
    <section>
      <Breadcrumbs
        text={"Certex"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        <div className="">
          <h2 className="text-primary"><b>{t("title")}</b></h2>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p>{t("content")}</p>
          <div className="mt-5">
            <h4 className="mb-3 text-gray-600 font-semibold">{t("IndustriesOfInfluence.title")}</h4>
            <ListResponsive
              list= {t("IndustriesOfInfluence.list", { returnObjects: true })}
              icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
            />
          </div>
        </div>
        <div className="mt-10">
          <p>{t("p2")}</p>
          <List
            list={t("li2", { returnObjects: true })}
            icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
          />
        </div>
        <div className="mt-10">
          <h4 className="text-primary font-bold text-center">"{t("phrase")}"</h4>
          <p className="mt-3">{t("p3")}</p>
          <div className="mt-5">
            <ListResponsive3Col
              list={t("li3", { returnObjects: true })}
              icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export { Corporativos }