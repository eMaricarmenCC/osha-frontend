import React from "react";
import { useTranslation } from "react-i18next";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { List } from "../../components/ui/List";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { PiSealCheckBold } from "react-icons/pi";
import { FaBuildingColumns } from "react-icons/fa6";


function Sedes() {
  const { t, i18n } = useTranslation("sedes");
  return(
    <section>
      <Breadcrumbs
        text={"Sedes"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20 w-full">
        <h1 className="text-primary uppercase"><b>{t("locations.title")}</b></h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <h3 className="mt-3">{t("locations.authorizedCenter.title")}</h3>
        <h4 className="mt-3">{t("locations.authorizedCenter.subtitle")}</h4>
        <p className="mt-5">{t("locations.authorizedCenter.description")}</p>
        <div className="mt-5">
          <Accordian className='flex flex-col gap-3' >
            <AccordianItem value='1' trigger={t("locations.authorizedCenter.benefits.title")}>
              <List
                list={t("locations.authorizedCenter.benefits.benefits", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
              <p>{t("locations.authorizedCenter.benefits.content")}</p>
            </AccordianItem>
            <AccordianItem value='2' trigger={t("locations.authorizedCenter.process.title")}>
              <List
                list={t("locations.authorizedCenter.process.process", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
            </AccordianItem>
            <AccordianItem value='3' trigger={t("locations.authorizedCenter.membershipFees.title")}>
              <List
                list={t("locations.authorizedCenter.membershipFees.membershipFees", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
            </AccordianItem>
          </Accordian>
          <p className="mt-10">{t("locations.authorizedCenter.complaints")}</p>
        </div>
      </div>
    </section>
  );
};
export { Sedes }