import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { useTranslation } from "react-i18next";


function Nosotros(){

  const { t, i18n } = useTranslation("nosotros");

  return (
    <>
    {/* Breadcrumbs */}
    <div className="relative w-full" style={{height:100}}>
      <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
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
    <section className="px-10 mt-10">
      <div className="mb-4">{/* Titulo */}
          <h2><b>{t("whoWeAre.title")}</b></h2>
          <div className="h-1 w-14 bg-secondary mt-1"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-3">
          <p>{t("whoWeAre.p1")}</p>
          <p>{t("whoWeAre.p2")}</p>
        </div>
        <div></div>
      </div>

      
    </section>

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
export default Nosotros