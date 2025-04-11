import React from "react";
import { useTranslation } from "react-i18next";

import { ButtonEmailInfo } from "../../components/ui/Button";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { List } from "../../components/ui/List";
import { Line1 } from "../../components/ui/Line";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";

import { PiSealCheckBold } from "react-icons/pi";
import { FaBuildingColumns } from "react-icons/fa6";


function Membresia() {
  const { t, i18n } = useTranslation("membresia");
  return(
    <section className="">
      <Breadcrumbs
        text={"Membresía"}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-16 w-full">
        <h1 className="text-primary font-bold">{t("membership.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        {t("membership.description", { returnObjects: true }).map((li, index) => (
          <li key={index} className="flex gap-1 text-primary">
            <p className="mt-3">{li}</p>
          </li>
        ))}
        <div className="mt-8 p-5 border-2 border-primary rounded-lg">
          <Accordian className='flex flex-col gap-3' >
            <AccordianItem value='1' trigger={t("membership.benefits.title")}>
              <List
                list={t("membership.benefits.benefits", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
            </AccordianItem>
            <AccordianItem value='2' trigger={t("membership.membership.title")}>
              <ul>
                {t("membership.membership.packages", { returnObjects: true }).map((li, index) => (
                  <li key={index} className="">
                    <p>{li.certificates.certificates}</p>
                    <p>{li.certificates.price}</p>
                    <p>{li.certificates.membership}</p>
                    <p>{li.certificates.price_membership}</p>
                  </li>
                ))}
              </ul>
            </AccordianItem>
          </Accordian>
        </div>
        <p className="mt-5">{t("membership.contact")}</p>
        <ButtonEmailInfo />
      </div>
    </section>
  );
};
export { Membresia }