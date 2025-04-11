import React from "react";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Linea, Line1, OneLine } from '../../components/ui/Line';
import { FaBuildingColumns } from "react-icons/fa6";
import { List, ListPoint, ListResponsive } from "../../components/ui/List";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { TbPointFilled } from "react-icons/tb";


function Certex() {
  const { t, i18n } = useTranslation("certex");
  return(
    <section className="bg-grisFondo">
      <Breadcrumbs
        text={"Certex"}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h5>{t("certex.title")}</h5>
          <h2 className="text-primary"><b>{t("certex.subtitle")}</b></h2>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p>{t("certex.description")}</p>
          <button className="mt-5 bg-primary hover:bg-azulOscuro text-white p-3 rounded-lg">Contactar</button>
        </div>
        {/* OBjetivo */}
        <div className="mt-10 bg-white p-5 rounded-r-lg shadow-lg border-l-8 border-primary">
          <h3 className="text-primary"><b>{t("certex.objective.title")}</b></h3>
          <p>{t("certex.objective.content")}</p>
        </div>
        {/* Beneficios */}
        <div className="mt-10 bg-white p-5 rounded-l-lg shadow-lg border-r-8 border-primary">
          <h3 className="text-primary"><b>{t("certex.benefits.title")}</b></h3>
          <div className="mt-3">          
            <h4 className="mb-2 text-sky-600">{t("certex.benefits.workers.title")}</h4>
            <ListPoint
              list={t("certex.benefits.workers.content", { returnObjects: true })}
            />
          </div>
          <div className="mt-2">
            <h4 className="mb-2 text-sky-600">{t("certex.benefits.companies.title")}</h4>
            <ListPoint
              list={t("certex.benefits.companies.content", { returnObjects: true })}
            />
          </div>
        </div>
        {/* Procesos */}
        <div className="mt-10 bg-white p-5 rounded-r-lg shadow-lg border-l-8 border-primary">
          <h3 className="mb-3 text-primary font-bold">{t("certex.process.title")}</h3>
          <ListPoint
            list={t("certex.process.content", { returnObjects: true })}
            icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
          />
        </div>
        {/* Perfiles ocupacionales */}
        <div className="mt-10">
          <div className="bg-white px-6 py-6 rounded-lg shadow-lg">
            <h3 className="text-primary"><b>{t("certex.occupationalProfiles.title")}</b></h3>
            <p>{t("certex.occupationalProfiles.content")}</p>
          </div>
          <div className="mt-5">
            <Accordian className='flex flex-col gap-3' >
              <AccordianItem value='1' trigger={t("certex.occupationalProfiles.mining.title")}>
                <ListPoint
                  list={t("certex.occupationalProfiles.mining.li", { returnObjects: true })}
                />
              </AccordianItem>
              <AccordianItem value='2' trigger={t("certex.occupationalProfiles.basicManagementAreas.title")}>
                <ListPoint
                  list={t("certex.occupationalProfiles.basicManagementAreas.li", { returnObjects: true })}
                />
              </AccordianItem>
              <AccordianItem value='3' trigger={t("certex.occupationalProfiles.Administrative.title")}>
                <ListPoint
                  list={t("certex.occupationalProfiles.Administrative.li", { returnObjects: true })}
                />
              </AccordianItem>
              <AccordianItem value='4' trigger={t("certex.occupationalProfiles.Industrial.title")}>
                <ListPoint
                  list={t("certex.occupationalProfiles.Industrial.li", { returnObjects: true })}
                />
              </AccordianItem>
            </Accordian>
          </div>
        </div>
        {/* Certificación y acreditación */}
        <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-primary font-bold">{t("certex.certificationAndAccreditation.title")}</h3>
          <p className="mt-3">{t("certex.certificationAndAccreditation.content")}</p>
        </div>
      </div>
    </section>
  );
};
export { Certex }