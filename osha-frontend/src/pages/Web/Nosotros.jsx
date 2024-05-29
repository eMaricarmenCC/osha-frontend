import React, { createContext, useContext, useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SliderImg } from "../../components/Slider/Slider";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { CardFotTex } from "../../components/ui/Card";
import { List } from "../../components/ui/List";
import { Line1 } from "../../components/ui/Line";

import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiHandshakeFill, PiSealCheckBold } from "react-icons/pi";
import { ChevronDown, Divide } from "react-feather";
import { FcApproval, FcViewDetails } from "react-icons/fc";


function Nosotros(){
  const { t, i18n } = useTranslation("nosotros");
  return (
    <div className="bg-grisFondo">
      <Breadcrumbs/>
      <WhoWeAre/>
      <LegalNature/>
      <InternationalCooperation/>
      <PrivacyAndSecurityDeclaration/>
      <Estandares/>
      <Sedes/>
      <Membresia/>
    </div>
  )   
}

// Breadcrumbs para la cabecera de cada página
function Breadcrumbs(){
  return(
    <div className="relative w-full" style={{height:150}}>
      <img src="/src/assets/img-nosotros/business.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
      <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-row items-center justify-between px-5 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-row gap-2 items-center">
          <FaBuildingColumns color="white" style={{height:20, width:20}} />
          <h2 className="text-3xl text-white font-bold">Nosotros</h2>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center flex-wrap">
          <ul className="flex items-center">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-600 hover:text-primary transform transition-transform hover:scale-110">
                <FaHome style={{color:'white'}}/>
              </Link>
              <span className="mx-4 h-auto text-white font-medium">/</span>
            </li>
            <li className="inline-flex items-center">
              <Link to="#" className="hover:text-azulClaro text-azulClaro transform transition-transform hover:scale-110">Nosotros</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, text, backgroundClass, borderClass, textColorClass }) => {
  return (
    <div className={`p-5 ${backgroundClass} border-l-8 ${borderClass} rounded-r-lg shadow-lg flex items-center gap-3`}>
      <div>
        {icon}
      </div>
      <div>
        <h4 className={`${textColorClass}`}><b>{title}</b></h4>
        <p className="mt-2 text-xs">{text}</p>
      </div>
    </div>
  );
};


/* QUIENES SOMOS */
function WhoWeAre(){
  const { t, i18n } = useTranslation("nosotros");
  return(
    <>
    <Breadcrumbs/>
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20 w-full">
      {/* Who are we? */}
      <div className="w-full flex justify-center">
        <div className="lg:ml-8 lg:flex lg:max-w-10xl lg:shadow-lg rounded-lg" style={{ backgroundImage: "url('/src/assets/papel/papel3.jpeg')" }}>
          <div className="lg:w-2/4">
            <div className="lg:scale-110 h-80 bg-cover lg:w-full lg:h-full rounded-b-none border lg:rounded-lg"
              style={{backgroundImage:'url("/src/assets/img-nosotros/nosotrosCrop.jpg")'}}>
            </div>
          </div>
          <div className="py-12 px-6 lg:px-12 max-w-3xl md:max-w-7xl lg:w-2/4 rounded-t-none border lg:rounded-lg">
            <h2 className="text-3xl text-secondary font-bold">{t("whoWeAre.title")}</h2>
            <p className="mt-2">{t("whoWeAre.p1")}</p>
            <p className="mt-2">{t("whoWeAre.p2")}</p>
            <div className="mt-8">
              <Link to="/contact" className="bg-primary text-gray-100 px-5 py-3 font-semibold rounded">Contactanos</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Seccion de cartillas */}
      <div className="mt-20 w-full flex justify-center">
        <div className="flex flex-col md:flex-row gap-5">
          <Card
            icon={<HiOutlineBuildingOffice2 style={{color:"var(--lilaFuerte)",width:50, height:50}}/>}
            title={t("whoWeAre.tit2-oshins")}
            text={t("whoWeAre.oshins")}
            backgroundClass="bg-white"
            borderClass="border-lilaFuerte"
            textColorClass="text-lilaFuerte"
          />
          <Card
            icon={<PiHandshakeFill style={{color:"var(--mintFuerte)", width:50, height:50}}/>}
            title={t("whoWeAre.tit3-compromise")}
            text={t("whoWeAre.compromise")}
            backgroundClass="bg-white"
            borderClass="border-mintFuerte"
            textColorClass="text-mintFuerte"
          />
        </div>
      </div>
      {/* Correo */}
      <div className="mt-14">
        <div className="bg-grisOscuro px-5 py-5">
          <p className="text-white text-center">Para más información, escríbenos a: info@osha.es</p>
        </div>
      </div>
    </div></>
  );
};


/* NATURALEZA JURÍDICA */
function LegalNature(){
  const { t, i18n } = useTranslation("nosotros");
  return(
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
      {/* legalNature */}
      <div className="p-5 rounded-xl" style={{ backgroundImage: "url('/src/assets/papel/papel14.jpg')"}}>
        <div className="overflow-hidden flex flex-col lg:flex-row mx-auto">
          <img className="w-full max-w-xl rounded-full" src="/src/assets/img-nosotros/juridic.jpg" alt="osha-institute"/>
          <div className={`relative lg:-ml-40 px-5 lg:px-10 pt-8 pb-8 bg-white lg:m-10 rounded-xl shadow-xl`}>
            <h4 className={`font-semibold text-lg inline-block ease-in-out inline-block mb-1`}>{t("legalNature.title")}</h4>
            <Line/>
            <p className="text-gray-500 text-sm mt-3">{t("legalNature.content")}</p>
          </div>
        </div>
      </div>
      {/* Mision and Vision */}
      <div className="mt-20">
        <div className="flex flex-col lg:flex-row gap-4">
          <CardFotTex
            title={t("legalNature.tit2-mision")}
            text={t("legalNature.mision")}
            textColorClass="text-primary"
            img="/src/assets/img-nosotros/eduaction.jpeg"
          />
          <CardFotTex
            title={t("legalNature.tit2-vision")}
            text={t("legalNature.vision")}
            textColorClass="text-primary"
            img="/src/assets/img-nosotros/profesionals.jpg"
          />
        </div>
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <div className="flex">
      <div className="bg-secondary h-1 w-5"></div>
      <div className="bg-white h-1 w-2"></div>
      <div className="bg-secondary h-1 w-20"></div>
    </div>
  );
};


/* COOPEACIÓN INTERNACIONAL */
function InternationalCooperation(){
  const { t, i18n } = useTranslation("nosotros");
  const coopImages = [
    {
      id: 1,
      src: "/src/assets/img-coopinte/coop-accsb.jpg",
    },
    {
      id: 2,
      src: "/src/assets/img-coopinte/coop-amba.jpg",
    },
    {
      id: 3,
      src: "/src/assets/img-coopinte/coop-ansi.jpg",
    },
    {
      id: 4,
      src: "/src/assets/img-coopinte/coop-asme.jpg",
    },
    {
      id: 5,
      src: "/src/assets/img-coopinte/coop-cat.jpg",
    },
    {
      id: 6,
      src: "/src/assets/img-coopinte/coop-ecbe.jpg",
    },
    {
      id: 7,
      src: "/src/assets/img-coopinte/coop-eed.jpg",
    },
    {
      id: 8,
      src: "/src/assets/img-coopinte/coop-etsi.jpg",
    },
    {
      id: 9,
      src: "/src/assets/img-coopinte/coop-mit.jpg",
    },
    {
      id: 10,
      src: "/src/assets/img-coopinte/coop-nfpa.jpg",
    },
    {
      id: 11,
      src: "/src/assets/img-coopinte/coop-niosh.jpg",
    },
    {
      id: 12,
      src: "/src/assets/img-coopinte/coop-osha.jpg",
    },
    {
      id: 13,
      src: "/src/assets/img-coopinte/coop-teex.jpg",
    },
    {
      id: 14,
      src: "/src/assets/img-coopinte/coop-texas.jpg",
    },
    {
      id: 15,
      src: "/src/assets/img-coopinte/coop-wso.jpg",
    },
  ];
  return(
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
      {/* internationalCooperation */}
      <div className="">
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <h2 className="text-primary"><b>{t("internationalCooperation.title")}</b></h2>
          <Line1 bgColorClass="bg-secondary"/>
          {t("internationalCooperation.p", { returnObjects: true }).map((paragraph, index) => (
            <p key={index} className="mt-2">{paragraph}</p>
          ))}
          <button className="mt-4 bg-primary hover:bg-azulOscuro py-2 px-4 rounded-lg text-white">Contáctanos</button>
        </div>
        <div>
          
        </div>
      </div>
      {/* Carousel */}
      <div className="mt-10">
        <SliderImg imgs={coopImages}/>
      </div>
    </div>
  );
};


/* PRIVACIDAD Y DECLARACIÓN DE LA SEGURIDAD */
function PrivacyAndSecurityDeclaration(){
  const { t, i18n } = useTranslation("nosotros");
  return(
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
      <div className="rounded-lg bg-white p-5 shadow-lg">
        <h2 className="text-primary"><b>{t("privacyAndSecurityDeclaration.title")}</b></h2>
        <Line1 bgColorClass={"bg-secondary"}/>
        <p>{t("privacyAndSecurityDeclaration.content")}</p>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <p>{t("privacyAndSecurityDeclaration.queans1.answer")}</p>
        </div>
        <Accordian className='flex flex-col gap-3' >
          <AccordianItem value='1' trigger={t("privacyAndSecurityDeclaration.queans1.question")}>
            {t("privacyAndSecurityDeclaration.queans1.answer")}
          </AccordianItem>
          <AccordianItem value='2' trigger={t("privacyAndSecurityDeclaration.queans2.question")}>
            {t("privacyAndSecurityDeclaration.queans2.answer")}
          </AccordianItem>
          <AccordianItem value='3' trigger={t("privacyAndSecurityDeclaration.queans3.question")}>
            {t("privacyAndSecurityDeclaration.queans3.answer")}
          </AccordianItem>
          <AccordianItem value='4' trigger={t("privacyAndSecurityDeclaration.queans4.question")}>
            {t("privacyAndSecurityDeclaration.queans4.answer")}
          </AccordianItem>
          <AccordianItem value='5' trigger={t("privacyAndSecurityDeclaration.queans5.question")}>
            {t("privacyAndSecurityDeclaration.queans5.answer")}
          </AccordianItem>
          <AccordianItem value='6' trigger={t("privacyAndSecurityDeclaration.queans6.question")}>
            {t("privacyAndSecurityDeclaration.queans6.answer")}
          </AccordianItem>
          <AccordianItem value='7' trigger={t("privacyAndSecurityDeclaration.queans7.question")}>
            {t("privacyAndSecurityDeclaration.queans7.answer")}
          </AccordianItem>
        </Accordian>
      </div>
    
    </div>
  );
};


function Estandares() {
  const { t, i18n } = useTranslation("estandares");
  return(
    <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
      <div className="bg-white rounded-lg shadow-lg p-5">
        <h3 className="text-primary"><b>{t("title")}</b></h3>
        <Line1 bgColorClass={"bg-secondary"}/>
        <p className="mt-2">{t("p1")}</p>
        <p className="mt-2">{t("p2")}</p>
        <Link to="https://www.osha.gov/topics/text-index" className="bg-primary p-3 rounded-lg hover:bg-azulOscuro text-white">Conoce los estándares</Link>
      </div>
      <div></div>
    </div>
  );
};

const Sedes = () => {
  const { t, i18n } = useTranslation("sedes");
  return(
    <>
    {/* Sedes */}
    <div className="">
      <div></div>
      <div className="">
        <h2>{t("locations.title")}</h2>
        <h3>{t("locations.authorizedCenter.title")}</h3>
        <h4>{t("locations.authorizedCenter.subtitle")}</h4>
        <p>{t("locations.authorizedCenter.description")}</p>
        <div>
          <Accordian className='flex flex-col gap-3' >
            <AccordianItem value='1' trigger={t("locations.authorizedCenter.benefits.title")}>
              <List
                list={t("locations.authorizedCenter.benefits.benefits", { returnObjects: true })}
                icon={<PiSealCheckBold/>}
              />
              <p>{t("locations.authorizedCenter.benefits.content")}</p>
            </AccordianItem>
            <AccordianItem value='2' trigger={t("locations.authorizedCenter.process.title")}>
              <List
                list={t("locations.authorizedCenter.process.process", { returnObjects: true })}
                icon={<PiSealCheckBold/>}
              />
            </AccordianItem>
            <AccordianItem value='3' trigger={t("locations.authorizedCenter.membershipFees.title")}>
              <List
                list={t("locations.authorizedCenter.membershipFees.membershipFees", { returnObjects: true })}
                icon={<PiSealCheckBold/>}
              />
            </AccordianItem>
          </Accordian>
          <p>{t("locations.authorizedCenter.complaints")}</p>
        </div>
      </div>
    </div>
    </>
  );
};

/* MEMBRESIA */
const Membresia = () =>{
  const { t, i18n } = useTranslation("membresia");
  return(
    <>
    {/* MEMBRESÍA */}
    <div>
      <div>
        <h2>{t("membership.title")}</h2>
        <p>{t("membership.description")}</p>
        <div>
          <Accordian className='flex flex-col gap-3' >
            <AccordianItem value='1' trigger={t("membership.benefits.title")}>
              <List
                list={t("membership.benefits.benefits", { returnObjects: true })}
                icon={<PiSealCheckBold/>}
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
        <p>{t("membership.contact")}</p>
      </div>
    </div>
    </>
  );
};

export { Nosotros, WhoWeAre, LegalNature, InternationalCooperation };