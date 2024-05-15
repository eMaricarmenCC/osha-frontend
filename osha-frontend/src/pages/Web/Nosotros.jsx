import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { HiMiniBuildingOffice } from "react-icons/hi2";


function Nosotros(){

  const { t, i18n } = useTranslation("nosotros");

  return (
    <>
    {/* Breadcrumbs */}
    <div className="relative w-full" style={{height:150}}>
      <img src="/src/assets/img-nosotros/nosotros.jpeg" alt="Background Image" class="object-cover object-center w-full h-full" />
      <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-row px-5 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <FaBuildingColumns color="white" style={{height:20, width:20}} />
          <h1 className="text-2xl text-white font-bold">Nosotros</h1>
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

    {/* whoWeAre */}
    <div>
      <div>
        <h3 className="text-3xl text-secondary font-bold">{t("whoWeAre.title")}</h3>
      </div>
      <div className="px-5 py-10 w-full flex justify-center">
        <div className="lg:mx-8 lg:flex lg:max-w-10xl lg:shadow-lg rounded-lg" style={{ backgroundImage: "url('/src/assets/papel/papel3.jpeg')" }}>
          <div className="lg:w-2/4">
            <div className="lg:scale-110 h-80 bg-cover lg:w-full lg:h-full rounded-b-none border lg:rounded-lg"
              style={{backgroundImage:'url("/src/assets/img-nosotros/nosotrosCrop.jpg")'}}>
            </div>
          </div>
          <div class="py-12 px-6 lg:px-12 max-w-3xl md:max-w-7xl lg:w-2/4 rounded-t-none border lg:rounded-lg">
            <h2 class="text-3xl text-secondary font-bold">{t("whoWeAre.title")}</h2>
            <p className="mt-2">{t("whoWeAre.p1")}</p>
            <p className="mt-2">{t("whoWeAre.p2")}</p>
            <div class="mt-8">
                <a href="#" class="bg-primary text-gray-100 px-5 py-3 font-semibold rounded">Contactanos</a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 mt-10 w-full flex justify-center">
        <div className="flex flex-col md:flex-row gap-5 max-w-6xl">
          <Card
            title={t("whoWeAre.tit2-oshins")}
            text={t("whoWeAre.oshins")}
            background="gray-100"
            color="primary"
          />
          <Card
            title={t("whoWeAre.tit3-compromise")}
            text={t("whoWeAre.compromise")}
            background="gray-100"
            color="red-500"
          />
        </div>
      </div>
    </div>

    {/* legalNature */}
    <section className="px-10 mt-10">
      <h2>{t("legalNature.title")}</h2>
      <p>{t("legalNature.content")}</p>
    </section>

    {/* internationalCooperation */}
    <section className="px-10">
      <h2>{t("internationalCooperation.title")}</h2>
      {t("internationalCooperation.p", { returnObjects: true }).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
    </section>

    {/* privacyAndSecurityDeclaration */}
    <section className="px-10">
      <h2>{t("privacyAndSecurityDeclaration.title")}</h2>
      <p>{t("privacyAndSecurityDeclaration.content")}</p>
      {t("internationalCooperation.p", { returnObjects: true }).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
    </section>

    </>
  )   
}
const Card = ({ icon, title, text, background, color }) => {
  return (
    <div className={`p-5 bg-${background} border-l-8 border-${color} rounded-r-lg shadow-lg flex gap-5`}>
      <div></div>
      <div>
        <h4 className={`text-${color}`}><b>{title}</b></h4>
        <p className="mt-2">{text}</p>
      </div>
    </div>
  );
};

export default Nosotros