import React, { createContext, useContext, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiHandshakeFill } from "react-icons/pi";
import { ChevronDown, Divide } from "react-feather";
import { FcApproval, FcViewDetails } from "react-icons/fc";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";

import { List } from "../../components/ui/List";
import { PiSealCheckBold } from "react-icons/pi";


function Nosotros(){

  const { t, i18n } = useTranslation("nosotros");

  return (
    <div className="bg-grisFondo">
      {/* Breadcrumbs */}
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
      <div className="absolute inset-0 flex flex-row px-5 items-center justify-between">
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

const Email = () => {
  return(
    <></>
  );
};

function WhoWeAre(){

  const { t, i18n } = useTranslation("nosotros");

  return(
    <>
    {/* whoWeAre */}
    <div>
      <div className="px-5 py-10 lg:py-20 w-full flex justify-center">
        <div className="lg:mx-8 lg:flex lg:max-w-10xl lg:shadow-lg rounded-lg" style={{ backgroundImage: "url('/src/assets/papel/papel3.jpeg')" }}>
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
                <a href="#" className="bg-primary text-gray-100 px-5 py-3 font-semibold rounded">Contactanos</a>
            </div>
          </div>
        </div>
      </div>
      {/* Seccion de cartillas */}
      <div className="px-5 w-full flex justify-center">
        <div className="flex flex-col md:flex-row gap-5 max-w-6xl">
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

    </div>
    </>
  );
};

function LegalNature(){

  const { t, i18n } = useTranslation("nosotros");

  return(
    <>
    {/* legalNature */}
    <div className="px-5 py-10 lg:px-20 xl:px-20 mt-20" style={{ backgroundImage: "url('/src/assets/papel/papelSeamless.jpg')"}}>
      <div className="overflow-hidden flex flex-row mx-auto">
        <img className="w-full max-w-xl rounded-l-full" src="/src/assets/img-nosotros/juridic.jpg" alt="osha-institute"/>
        <div className={`relative -ml-40 px-10 pt-8 pb-8 bg-white m-10 rounded-xl shadow-xl`}>
          <h4 className={`font-semibold text-lg inline-block ease-in-out inline-block mb-1`}>{t("legalNature.title")}</h4>
          <Line/>
          <p className="text-gray-500 text-sm mt-3">{t("legalNature.content")}</p>
        </div>
      </div>
    </div>
    <div className="px-5 mt-10">
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
    </>
  );
};

const CardFotTex = ({ title, text, textColorClass, img}) => {
  return(
    <div className="overflow-hidden flex flex-col max-w-xl mx-auto">
      <img className="w-full rounded-2xl" src={img} alt="osha-institute"/>
      <div className={`relative -mt-28 px-10 pt-8 pb-8 bg-white m-10 rounded-xl shadow-xl`}>
        <h4 className={`${textColorClass} font-semibold text-lg inline-block ease-in-out inline-block mb-1`}>{title}</h4>
        <Line/>
        <p className="text-gray-500 text-sm mt-3">{text}</p>
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

function InternationalCooperation(){

  const { t, i18n } = useTranslation("nosotros");

  return(
    <>
    {/* internationalCooperation */}
    <div className="px-10 py-10 mt-5 py-14 bg-azulClaro">
      <div className="bg-white p-5 rounded-lg">
        <h2>{t("internationalCooperation.title")}</h2>
        {t("internationalCooperation.p", { returnObjects: true }).map((paragraph, index) => (
            <p key={index} className="mt-2">{paragraph}</p>
          ))}
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
    </>
  );
};

function PrivacyAndSecurityDeclaration(){

  const { t, i18n } = useTranslation("nosotros");

  return(
    <>
    {/* privacyAndSecurityDeclaration */}
    <div className="px-10 lg:px-20 xl:px-40">
      <h2>{t("privacyAndSecurityDeclaration.title")}</h2>
      <div>
        <p>{t("privacyAndSecurityDeclaration.content")}</p>

      </div>
      
      <div className="p-10 bg-white rounded-lg shadow-lg flex flex-col gap-5">
        <p>{t("privacyAndSecurityDeclaration.queans1.answer")}</p>
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
    </>
  );
};


function Estandares() {
  const { t, i18n } = useTranslation("estandares");
  return(
    <div className="">
      <div>
        <h3>{t("title")}</h3>
        <p className="mt-2">{t("p1")}</p>
        <p className="mt-2">{t("p2")}</p>
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

export default Nosotros;