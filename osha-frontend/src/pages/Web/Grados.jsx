import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { CardGrado } from '../../components/ui/Card';
import { Linea, Line1, OneLine } from '../../components/ui/Line';
import { FaBuildingColumns } from "react-icons/fa6";
import gradosData from "../../utils/gradosData";
import '../../styles/Tab.css';


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
              id={grado.id}
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

function GradoDetalle(){
  const params = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("inicio");
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
              Grado XYZ XYZ
            </h1>
            <Line1 bgColorClass={"bg-secondary"}/>
            <TabSections
              activeKey={0}
              sections={Modulo1}
            />
          </div>
          <div className="bg-gray-200 p-5 lg:min-w-lg">
            <img src="/src/assets/logo/osha-certificado.png" className="min-w-[150px] w-full lg:w-[300px] max-w-[500px]"/>
            <p>Certificado digital</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TabSections = ({ activeKey, sections }) => {
  const [activeTab, setActiveTab] = useState(activeKey);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {`Sección ${index + 1}`}
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

export const Presentacion = () => {
  return (
    <div>
      <h1>Cultura de seguridad</h1>
      
    </div>
  );
};
export const Beneficios = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <p>El éxito del Sistema de Gestión de Seguridad en la Construcción (CSMS) de su empresa depende de la voluntad de la alta dirección de demostrar un compromiso serio a largo plazo para proteger a todos los empleados de lesiones y enfermedades en el trabajo.</p>
        </div>
      </div>
    </div>
  );
};
export const Tematica = () => {
  return (
    <div>Contenido del Módulo 3</div>
  );
};

const Modulo1 = [Presentacion, Beneficios, Tematica];

export { Grados, GradoDetalle };