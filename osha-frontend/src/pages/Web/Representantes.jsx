import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from '../../components/ui/Line';
import { ButtonEmailInfo } from "../../components/ui/Button";

import { FaBuildingColumns } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";


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
        <h1 className="text-primary font-bold upeercase">{t("representativePakistan.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10 mx-auto max-w-lg">
          <img className="w-full" src="/src/assets/logo/hsas.png" alt="hsas" />
        </div>
        <p className="mt-10">{t("representativePakistan.description")}</p>
        <div className="mt-10">
          <h4 className="text-primary">{t("representativePakistan.contact.title")}</h4>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <CardContact
              icon={<FaMapMarkerAlt className="w-full h-full" />}
              title={t("representativePakistan.contact.address.title")}
              text={t("representativePakistan.contact.address.address")}
              colorClass={"sky-600"}
            />
            <CardContact
              icon={<FaPhoneAlt className="w-full h-full"/>}
              title={t("representativePakistan.contact.cellphone.title")}
              text={t("representativePakistan.contact.cellphone.cellphone")}
              colorClass={"mintFuerte"}
            />
            <CardContact
              icon={<MdEmail className="w-full h-full"/>}
              title={t("representativePakistan.contact.email.title")}
              text={t("representativePakistan.contact.email.email")}
              colorClass={"rojoFuerte"}
            />
            <CardContact
              icon={<TbWorldWww className="w-full h-full"/>}
              title={t("representativePakistan.contact.web.title")}
              text={t("representativePakistan.contact.web.web")}
              colorClass={"amarilloFuerte"}
            />
          </div>
        </div>
        <ButtonEmailInfo />
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
        <h1 className="text-primary font-bold uppercase">{t("representativeLondon.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10 mx-auto max-w-lg">
          <img className="w-full" src="/src/assets/logo/human-focus.png" alt="human focus" />
        </div>
        <div className="mt-8">
          {t("representativeLondon.description",{returnObjects: true}).map((p,index) => (
            <p key={index} className="mt-2">{p}</p>
          ))}
        </div>
        <div className="mt-10">
          <h4 className="text-primary">{t("representativeLondon.contact.title")}</h4>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <CardContact
              icon={<FaMapMarkerAlt className="w-full h-full" />}
              title={t("representativeLondon.contact.address.title")}
              text={t("representativeLondon.contact.address.address")}
              colorClass={"sky-600"}
            />
            <CardContact
              icon={<FaPhoneAlt className="w-full h-full"/>}
              title={t("representativeLondon.contact.cellphone.title")}
              text={t("representativeLondon.contact.cellphone.cellphone")}
              colorClass={"mintFuerte"}
            />
            <CardContact
              icon={<MdEmail className="w-full h-full"/>}
              title={t("representativeLondon.contact.email.title")}
              text={t("representativeLondon.contact.email.email")}
              colorClass={"rojoFuerte"}
            />
            <CardContact
              icon={<TbWorldWww className="w-full h-full"/>}
              title={t("representativeLondon.contact.web.title")}
              text={t("representativeLondon.contact.web.web")}
              colorClass={"amarilloFuerte"}
            />
          </div>
        </div>
        <ButtonEmailInfo />
      </div>
    </section>
  );
};


const CardContact = ({icon, title, text, colorClass}) => {
  return(
    <div className={`flex flex-row items-center gap-4 p-5 border-r-4 bg-gray-100 border-${colorClass}`}>
      <div className={`min-w-6 min-h-6 text-${colorClass}`}>{icon}</div>
      <div className="">
        <h5 className={`text-${colorClass} font-semibold`}>{title}</h5>
        <p className="text-[13px]">{text}</p>
      </div>
    </div>
  );
};

export { RepresentantePakistan, RepresentanteLondres }