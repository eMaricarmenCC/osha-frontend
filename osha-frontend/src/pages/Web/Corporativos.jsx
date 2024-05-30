import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { List, ListResponsive } from "../../components/ui/List";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { BsPatchCheck } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { Line1 } from "../../components/ui/Line";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";



function Corporativos() {
  const { t, i18n } = useTranslation("corporativos");
  return(
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
    <div className="">
      <h2 className="text-primary"><b>{t("title")}</b></h2>
      <Line1 bgColorClass={"bg-secondary"}/>
      <p>{t("content")}</p>
      <div className="mt-5">
        <h4 className="">{t("IndustriesOfInfluence.title")}</h4>
        <ListResponsive
          list= {t("IndustriesOfInfluence.list", { returnObjects: true })}
          icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
        />
      </div>
      <div>
        <p>{t("p2")}</p>
        <List
          list={t("li2", { returnObjects: true })}
          icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
        />
      </div>
      <div>
        <h4>{t("phrase")}</h4>
        <p>{t("p3")}</p>
        <List
          list={t("li3", { returnObjects: true })}
          icon={<TbPointFilled style={{color:"var(--grisOscuro)"}}/>}
        />
      </div>
    </div>
    </div>
  );
};
export { Corporativos }