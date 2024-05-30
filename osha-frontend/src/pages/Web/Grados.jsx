import React from "react";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { CardGrado } from '../../components/ui/Card';
import { Linea, Line1, OneLine } from '../../components/ui/Line';
import { FaBuildingColumns } from "react-icons/fa6";
import gradosData from "../../utils/gradosData";


function Grados(){
  const { t, i18n } = useTranslation("inicio");
  return (
    <section className="">
      <Breadcrumbs
        text={"Grados"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <h1 className="font-bold uppercase text-primary w-auto text-2xl lg:text-3xl">
          {t("accreditationDegrees.title")}
        </h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          { gradosData.map(grado => (
            <CardGrado
              key={grado.id}
              title={grado.title}
              code={grado.code}
              label={grado.label}
              src={grado.src}
            />
          ))
          }
        </div>
      </div>
    </section>
  );
};

export { Grados };