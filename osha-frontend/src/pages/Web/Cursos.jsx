import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";

import { FaBuildingColumns } from "react-icons/fa6";


function Cursos() {
  const { t, i18n } = useTranslation("cursos");
  return(
    <section>
      <Breadcrumbs
        text={t("title")}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        <h1 className="text-primary font-bold">{t("title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-6">
          {t("text", { returnObjects: true }).map((p, index) => (
            <p className="mt-1">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

function CursosGratuitos() {
  const { t, i18n } = useTranslation("cursos");
  return(
    <section>
      <Breadcrumbs
        text={t("title")}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        <h1 className="text-primary font-bold">{t("title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-6">
          {t("text", { returnObjects: true }).map((p, index) => (
            <p className="mt-1">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
export { Cursos, CursosGratuitos }