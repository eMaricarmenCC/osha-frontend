import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SliderImg } from "../../components/Slider/Slider";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { CardFotTex } from "../../components/ui/Card";
import { ListPoint } from "../../components/ui/List";
import { Line1 } from "../../components/ui/Line";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { buttonPrimary } from "../../components/ui/Button";
import { ImageWithInnerBorder } from "../../components/ui/Image";

import { FaBuildingColumns } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiHandshakeFill, PiSealCheckBold } from "react-icons/pi";
import { TbPointFilled } from "react-icons/tb";


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
    </div>
  )   
}

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
    <section>
      <Breadcrumbs
        text={t("title")}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20 w-full bg-gray-100">
        {/* Who are we? */}
        <div className="w-full flex justify-center">
          <div className="lg:ml-8 lg:flex lg:max-w-10xl lg:shadow-lg rounded-lg" style={{ backgroundImage: "url('/papel/papel3.jpeg')" }}>
            <div className="lg:w-2/4">
              <div className="lg:scale-110 h-80 bg-cover lg:w-full lg:h-full rounded-b-none border lg:rounded-lg"
                style={{backgroundImage:'url("/img-nosotros/nosotrosCrop.jpg")'}}>
              </div>
            </div>
            <div className="py-12 px-6 lg:px-12 max-w-3xl md:max-w-7xl lg:w-2/4 rounded-t-none border lg:rounded-lg">
              <h2 className="text-3xl text-secondary font-bold">{t("whoWeAre.title")}</h2>
              <p className="mt-2">{t("whoWeAre.p1")}</p>
              <p className="mt-2">{t("whoWeAre.p2")}</p>
              <div className="mt-8">
                <Link to="/contactanos" className="bg-primary text-gray-100 px-5 py-3 font-semibold rounded">Contactanos</Link>
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
      </div>
    </section>
  );
};


/* NATURALEZA JURÍDICA */
function LegalNature(){
  const { t, i18n } = useTranslation("nosotros");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("legalNature.title")}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      {/* legalNature */}
      <div className="px-5 md:px-10 lg:px-20 xl:px-60 py-10 lg:py-12 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="">
            <h1 className={`text-primary font-bold inline-block ease-in-out inline-block mb-1`}>{t("legalNature.title")}</h1>
            <Line1 bgColorClass={"bg-secondary"}/>
            <p className="mt-10">{t("legalNature.content")}</p>
          </div>
          <div className="">
            <img className="w-[3000px] h-full" src="/img-inicio/engineerwithlaptop.png" alt="" />
          </div>
        </div>
        {/*<div className="mt-10 p-5 rounded-l-full" style={{ backgroundImage: "url('/papel/papel14.jpg')"}}>
          <div className="overflow-hidden flex flex-col lg:flex-row mx-auto">
            <img className="w-full max-w-xl rounded-l-full" src="/img-nosotros/juridic.jpg" alt="osha-institute"/>
            <div className={`relative lg:-ml-40 px-5 lg:px-10 pt-8 pb-8 bg-white lg:m-10 rounded-l-xl shadow-xl`}>
              <p className="">{t("legalNature.content")}</p>
            </div>
          </div>
        </div>*/}
        {/* Mision and Vision */}
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row gap-4">
            <CardFotTex
              title={t("legalNature.tit2-mision")}
              text={t("legalNature.mision")}
              textColorClass="text-primary"
              img="/img-nosotros/eduaction.jpeg"
            />
            <CardFotTex
              title={t("legalNature.tit2-vision")}
              text={t("legalNature.vision")}
              textColorClass="text-primary"
              img="/img-nosotros/profesionals.jpg"
            />
          </div>
        </div>
      </div>
    </section>
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
      src: "/img-coopinte/coop-accsb.jpg",
    },
    {
      id: 2,
      src: "/img-coopinte/coop-amba.jpg",
    },
    {
      id: 3,
      src: "/img-coopinte/coop-ansi.jpg",
    },
    {
      id: 4,
      src: "/img-coopinte/coop-asme.jpg",
    },
    {
      id: 5,
      src: "/img-coopinte/coop-cat.jpg",
    },
    {
      id: 6,
      src: "/img-coopinte/coop-ecbe.jpg",
    },
    {
      id: 7,
      src: "/img-coopinte/coop-eed.jpg",
    },
    {
      id: 8,
      src: "/img-coopinte/coop-etsi.jpg",
    },
    {
      id: 9,
      src: "/img-coopinte/coop-mit.jpg",
    },
    {
      id: 10,
      src: "/img-coopinte/coop-nfpa.jpg",
    },
    {
      id: 11,
      src: "/img-coopinte/coop-niosh.jpg",
    },
    {
      id: 12,
      src: "/img-coopinte/coop-osha.jpg",
    },
    {
      id: 13,
      src: "/img-coopinte/coop-teex.jpg",
    },
    {
      id: 14,
      src: "/img-coopinte/coop-texas.jpg",
    },
    {
      id: 15,
      src: "/img-coopinte/coop-wso.jpg",
    },
  ];
  return(
    <section className="bg-grisFondo">
      <Breadcrumbs
        text={t("internationalCooperation.title")}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        {/* internationalCooperation */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:basis-1/2 flex-grow bg-white p-5 rounded-lg shadow-lg">
            <h2 className="text-primary"><b>{t("internationalCooperation.title")}</b></h2>
            <Line1 bgColorClass="bg-secondary"/>
            {t("internationalCooperation.p", { returnObjects: true }).map((paragraph, index) => (
              <p key={index} className="mt-2">{paragraph}</p>
            ))}
            <button className="mt-4 bg-primary hover:bg-azulOscuro py-2 px-4 rounded-lg text-white">Contáctanos</button>
          </div>
          <div className="lg:basis-1/2 flex-grow">
            <img className="rounded-xl h-full object-center" src="/img-inicio/coopeinter.png" alt="cooperacion internacional"/>
          </div>
        </div>
        {/* Carousel */}
        <div className="mt-10">
          <SliderImg imgs={coopImages}/>
        </div>
      </div>
    </section>
  );
};


/* PRIVACIDAD Y DECLARACIÓN DE LA SEGURIDAD */
function PrivacyAndSecurityDeclaration(){
  const { t, i18n } = useTranslation("nosotros");
  return(
    <section>
      <Breadcrumbs
        text={t("privacyAndSecurityDeclaration.title")}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-16">
        <h1 className="text-primary uppercase font-bold">{t("privacyAndSecurityDeclaration.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-8 flex flex-col gap-5 lg:gap-12 md:flex-row">
          <div className="">
            <p>{t("privacyAndSecurityDeclaration.content")}</p>
            <div className="mt-5 rounded-r-lg shadow-lg p-5 border-l-8 border-primary border-2">
              <p>{t("privacyAndSecurityDeclaration.content-p1")}</p>
            </div>
          </div>
          <div className="md:min-w-[400px] lg:min-w-[500px] lg:max-w-[550px] mx-auto">
            <ImageWithInnerBorder
              src={"/img-nosotros/privacy-security.avif"}
              alt="privacy"
            />
          </div>
        </div>
        <div className="mt-10 py-8 px-5 flex flex-col gap-5 bg-gray-100 rounded-lg">
          <Accordian className='flex flex-col gap-5' >
            <AccordianItem value='1' trigger={t("privacyAndSecurityDeclaration.queans1.question")}>
              <p>{t("privacyAndSecurityDeclaration.queans1.answer")}</p>
            </AccordianItem>
            <AccordianItem value='2' trigger={t("privacyAndSecurityDeclaration.queans2.question")}>
              <ListPoint
                list={t("privacyAndSecurityDeclaration.queans2.answer-li", { returnObjects: true })}
              />
              <p className="mt-5">{t("privacyAndSecurityDeclaration.queans2.answer")}</p>
            </AccordianItem>
            <AccordianItem value='3' trigger={t("privacyAndSecurityDeclaration.queans3.question")}>
              <p>{t("privacyAndSecurityDeclaration.queans3.answer")}</p>
            </AccordianItem>
            <AccordianItem value='4' trigger={t("privacyAndSecurityDeclaration.queans4.question")}>
              <p>{t("privacyAndSecurityDeclaration.queans4.answer")}</p>
            </AccordianItem>
            <AccordianItem value='5' trigger={t("privacyAndSecurityDeclaration.queans5.question")}>
              <p>{t("privacyAndSecurityDeclaration.queans5.answer")}</p>
            </AccordianItem>
            <AccordianItem value='6' trigger={t("privacyAndSecurityDeclaration.queans6.question")}>
              <p>{t("privacyAndSecurityDeclaration.queans6.answer")}</p>
            </AccordianItem>
            <AccordianItem value='7' trigger={t("privacyAndSecurityDeclaration.queans7.question")}>
              <p className="mt-3">{t("privacyAndSecurityDeclaration.queans7.answer-p1")}</p>
              <p className="mt-3">{t("privacyAndSecurityDeclaration.queans7.answer-p2")}</p>
              <p className="mt-3">{t("privacyAndSecurityDeclaration.queans7.answer-p3")}</p>
              <p className="mt-3">{t("privacyAndSecurityDeclaration.queans7.answer-p4")}</p>
              <p className="mt-3">{t("privacyAndSecurityDeclaration.queans7.answer-p5")}</p>
              <p className="mt-3">{t("privacyAndSecurityDeclaration.queans7.answer-p6")}</p>
              <p className="mt-3">{t("privacyAndSecurityDeclaration.queans7.answer-p7")}</p>
            </AccordianItem>
          </Accordian>
        </div>
        <div className="mt-10 border-2 border-primary p-5 rounded-lg">
            <p>{t("privacyAndSecurityDeclaration.content-p2")}</p>
            <p className="mt-3">{t("privacyAndSecurityDeclaration.content-p3")}</p>
            <p className="mt-3">{t("privacyAndSecurityDeclaration.content-p4")}</p>
          </div>
      </div>
    </section>
  );
};

export {
  Nosotros,
  WhoWeAre,
  LegalNature,
  InternationalCooperation,
  PrivacyAndSecurityDeclaration
};