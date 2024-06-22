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


function RepresentantePakistan() {
  const { t, i18n } = useTranslation("representantes");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("title")}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 w-full">
        <h1 className="text-primary font-bold">{t("representativePakistan.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <p>{t("representativePakistan.description")}</p>
      </div>
    </section>
  );
};

function RepresentanteLondres() {
  const { t, i18n } = useTranslation("representantes");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("title")}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 w-full">
        <h1 className="text-primary font-bold">{t("representativeLondres.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
      </div>
    </section>
  );
};

export { RepresentantePakistan, RepresentanteLondres }