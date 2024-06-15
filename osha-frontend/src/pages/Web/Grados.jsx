"use client"
import React from "react";
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";

import { CardGrado } from '../../components/ui/Card';
import { Linea, Line1, OneLine } from '../../components/ui/Line';
import { ListIcon, ListPoint } from "../../components/ui/List";

import { FaBuildingColumns } from "react-icons/fa6";
import { LuArrowRightSquare } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";
import { PiCertificate } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaLaptop, FaQrcode } from "react-icons/fa";
import { TiTime } from "react-icons/ti";
import { TbArrowBigRightFilled } from "react-icons/tb";

import "../../styles/Tab.css";


function Grados(){
  const { t, i18n } = useTranslation("grados");
  const navigate = useNavigate();

  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return (
    <section className="">
      <Breadcrumbs
        text={"Grados"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <h1 className="font-bold uppercase text-primary w-auto text-2xl lg:text-3xl">
          {t("title")}
        </h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
          { t("degreeData", { returnObjects: true }).map(grado => (
            <CardGrado
              id={grado.id}
              title={grado.title}
              code={grado.code}
              label={grado.label}
              src={grado.src}
              onClick={() => handleCardClick(grado)}
            />
          ))
          }
        </div>
      </div>
    </section>
  );
};

function GradoDetalle(){
  const { id } = useParams();
  const location = useLocation();
  const { grado } = location.state || {};
  const { t, i18n } = useTranslation("grados");
  
  if (!grado) {
    return <div>No hay datos disponibles para este grado.</div>;
  }

  const Brochure = [
    () => <Presentacion content={grado.presentation} />,
    () => <Beneficios content={grado.benefits} />,
    () => <Tematica content={grado.sylabus} />
  ];

  return (
    <section className="">
      <Breadcrumbs
        text={"Grados"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          <div className="w-full">
            <h1 className="font-bold uppercase text-primary w-auto text-2xl lg:text-3xl">
              {grado.title}
            </h1>
            <Line1 bgColorClass={"bg-secondary"}/>
            <img src={grado.src} alt="" className="mt-10"/>
            <div className="mt-10">
              <TabSections
                activeKey={0}
                sections={Brochure}
                headers={t("tab-header", { returnObjects: true })}
              />
            </div>
          </div>
          {/* div side right */}
          <div className="bg-gray-100 p-5 lg:min-w-lg">
            <div className="flex justify-center">
              <img src="/src/assets/logo/osha-certificado.png" className="min-w-[150px] w-full lg:w-[300px] max-w-[500px]"/>
            </div>
            <hr className="my-6 border-t-2 border-gray-300" />
            <div className="flex flex-col gap-3">
              {grado.details.map((detail, index) => (
                <div key={index} className="flex flex-row gap-3">
                  <TbArrowBigRightFilled style={{color:"var(--secondary)"}}/>
                  <p><span className="text-primary font-bold">{detail.title}: </span>{detail.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="">
                <p>{grado.details.title}</p>
                <p>{grado.details.text}</p>
              </div>
            </div>
            <hr className="my-6 border-t-2 border-gray-300" />
            <h4 className="mt-3 mb-3 text-primary">{t("certificate.title")}</h4>
            <p>{t("certificate.digital")} </p>
            <p>{t("certificate.fisico")} </p>
            <hr className="my-6 border-t-2 border-gray-300" />
            <h4 className="mb-3 text-primary">{t("considerations.title")}</h4>
            <ListPoint
              list={t("considerations.list", { returnObjects: true })}
            />
            <hr className="my-6 border-t-2 border-gray-300" />
            {/* Pagar con Paypal */}
            <div className="mt-5">
              <h4 className="text-primary mb-4">Realice su pago aquí</h4>
              {/*<PayPalScriptProvider>
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                  }}
                />
                </PayPalScriptProvider>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TabSections = ({ activeKey, sections, headers }) => {
  const [activeTab, setActiveTab] = useState(activeKey);
  const { t } = useTranslation("grados");
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {headers.map((header, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {header}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={`tab-pane ${activeTab === index ? "active" : ""}`}
          >
            <SectionComponent key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Presentacion = ({ content }) => {
  return (
    <div>
      {content.map((paragraph, index) => (
        <p key={index} className="mt-3">{paragraph}</p>
      ))}
    </div>
  );
};
export const Beneficios = ({ content }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 2xl:grid-cols-2 grid-row-auto gap-5">
        <div className="flex flex-row gap-3 bg-gray-200 py-5 px-5 border-l-8 border-primary rounded-r-3xl sm:rounded-r-full items-center text-center">
          <div className="w-full">
            <p className="text-sm">{content.certificate.l1}</p>
            <p className="font-bold text-primary">{content.certificate.l2}</p>
            <p className="text-sm">{content.certificate.l3}</p>
          </div>
          <div className="h-full flex items-center sm:p-5 sm:bg-white rounded-full">
            <GrCertificate style={{color:"var(--primary)", height:"50px", width:"50px"}}/>
          </div>
        </div>
        <div className="flex flex-row gap-3 bg-gray-200 py-5 px-5 border-l-8 border-primary rounded-r-3xl sm:rounded-r-full items-center text-center">
          <div className="w-full">
            <p className="text-sm">{content.diplomat.l1}</p>
            <p className="font-bold text-primary">{content.diplomat.l2}</p>
          </div>
          <div className="h-full flex items-center sm:p-5 sm:bg-white rounded-full">
            <LiaCertificateSolid style={{color:"var(--primary)", height:"50px", width:"50px"}}/>
          </div>
        </div>
        <div className="flex flex-row gap-3 bg-gray-200 py-5 px-5 border-l-8 border-primary rounded-r-3xl sm:rounded-r-full items-center text-center">
          <div className="w-full">
            <p className="font-bold text-primary">{content.carnet.l1}</p>
            <p>{content.carnet.l2}</p>
          </div>
          <div className="h-full flex items-center sm:p-5 sm:bg-white rounded-full">
            <PiCertificate style={{color:"var(--primary)", height:"50px", width:"50px"}}/>
          </div>
        </div>
        <div className="flex flex-row gap-3 bg-gray-200 py-5 px-5 border-l-8 border-primary rounded-r-3xl sm:rounded-r-full items-center text-center">
          <div className="w-full">
            <p className="text-sm">{content.code.l1}</p>
            <p className="font-bold text-primary">{content.code.l2}</p>
            <p className="text-xs">{content.code.l3}</p>
          </div>
          <div className="h-full flex items-center sm:p-5 sm:bg-white rounded-full">
            <FaQrcode style={{color:"var(--primary)", height:"50px", width:"50px"}}/>
          </div>
        </div>
        <div className="flex flex-row gap-3 bg-gray-200 py-5 px-5 border-l-8 border-primary rounded-r-3xl sm:rounded-r-full items-center text-center">
          <div className="w-full">
            <p>{content.hours.l1}</p>
            <p className="font-bold text-primary">{content.hours.l2}</p>
            <p className="font-bold text-primary">{content.hours.l3}</p>
          </div>
          <div className="h-full flex items-center sm:p-5 sm:bg-white rounded-full">
            <TiTime style={{color:"var(--primary)", height:"50px", width:"50px"}}/>
          </div>
        </div>
        <div className="flex flex-row gap-3 bg-gray-200 py-5 px-5 border-l-8 border-primary rounded-r-3xl sm:rounded-r-full items-center text-center">
          <div className="w-full">
            <p>{content.classroom.l1}</p>
            <p className="font-bold text-primary">{content.classroom.l2}</p>
            <p className="font-bold text-primary">{content.classroom.l3}</p>
            <p>{content.classroom.l4}</p>
          </div>
          <div className="h-full flex items-center sm:p-5 sm:bg-white rounded-full">
            <FaLaptop style={{color:"var(--primary)", height:"50px", width:"50px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Tematica = ({ content }) => {
  return (
    <div>
      {content.map((module, index) => (
        <div key={index}>
          <div className="mb-5">
            <h4 className="text-sky-800">{module.module}: {module.title}</h4>
            <ListIcon
              list={module.courses}
              icon={<LuArrowRightSquare style={{color:"var(--primary)"}}/>}
            />
          </div>
          <hr className="my-6 border-t-2 border-gray-300" />
        </div>
      ))}
    </div>
  );
};

export { Grados, GradoDetalle };