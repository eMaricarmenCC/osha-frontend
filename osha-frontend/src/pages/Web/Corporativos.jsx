import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { List, ListResponsive } from "../../components/ui/List";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { BsPatchCheck } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";


function Corporativos(){
  return (
    <>
    {/* BREADCRUMB */}
    <div className="relative w-full" style={{height:150}}>
      <img src="/src/assets/img-nosotros/business.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
      <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-row px-5 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <MdContactMail color="white" style={{height:20, width:20}} />
          <h2 className="text-3xl text-white font-bold">Certex</h2>
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
              <Link to="#" className="hover:text-azulClaro text-azulClaro transform transition-transform hover:scale-110">Contactanos</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <Certex/>
      <Corporativo/>
    </>
  )
};

const Certex = () => {
  const { t, i18n } = useTranslation("certex");
  return(
    <>
    {/* Certex */}
    <div className="px-5 py-10 lg:px-20 xl:px-20 mt-5">
      <div>
        <h5>{t("certex.title")}</h5>
        <h3>{t("certex.subtitle")}</h3>
        <p>{t("certex.description")}</p>
        <button>Contactar</button>
      </div>
      <div>
        <h3>{t("certex.objective.title")}</h3>
        <p>{t("certex.objective.content")}</p>
      </div>
      <div>
        <h3>{t("certex.benefits.title")}</h3>
        <div>          
          <h4>{t("certex.benefits.workers.title")}</h4>
          <List
            list={t("certex.benefits.workers.content", { returnObjects: true })}
            icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
          />
        </div>
        <div>
          <h4>{t("certex.benefits.companies.title")}</h4>
          <List
            list={t("certex.benefits.companies.content", { returnObjects: true })}
            icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
          />
        </div>
      </div>
      <div>
        <h3>{t("certex.process.title")}</h3>
        <List
          list={t("certex.process.content", { returnObjects: true })}
          icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
        />
      </div>
      <div>
        <h3>{t("certex.occupationalProfiles.title")}</h3>
        <p>{t("certex.occupationalProfiles.content")}</p>
        <div>
          <Accordian className='flex flex-col gap-3' >
            <AccordianItem value='1' trigger={t("certex.occupationalProfiles.mining.title")}>
              <List
                list={t("certex.occupationalProfiles.mining.li", { returnObjects: true })}
                icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
              />
            </AccordianItem>
            <AccordianItem value='2' trigger={t("certex.occupationalProfiles.basicManagementAreas.title")}>
              <List
                list={t("certex.occupationalProfiles.basicManagementAreas.li", { returnObjects: true })}
                icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
              />
            </AccordianItem>
            <AccordianItem value='3' trigger={t("certex.occupationalProfiles.Administrative.title")}>
              <List
                list={t("certex.occupationalProfiles.Administrative.li", { returnObjects: true })}
                icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
              />
            </AccordianItem>
            <AccordianItem value='4' trigger={t("certex.occupationalProfiles.Industrial.title")}>
              <List
                list={t("certex.occupationalProfiles.Industrial.li", { returnObjects: true })}
                icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
              />
            </AccordianItem>
          </Accordian>
        </div>
      </div>
      <div>
        <h3>{t("certex.certificationAndAccreditation.title")}</h3>
        <p>{t("certex.certificationAndAccreditation.content")}</p>
      </div>
    </div>
    </>
  );
};

const Corporativo = () => {
  const { t, i18n } = useTranslation("corporativos");
  return(
    <>
    {/* Corporativos */}
    <div className="px-5 py-10 lg:px-20 xl:px-20 mt-20">
      <h3>{t("title")}</h3>
      <p>{t("content")}</p>
      <div>
        <h4>{t("IndustriesOfInfluence.title")}</h4>
        <ListResponsive
          list= {t("IndustriesOfInfluence.list", { returnObjects: true })}
          icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
        />
      </div>
      <div>
        <p>{t("p2")}</p>
        <List
          list={t("li2", { returnObjects: true })}
          icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
        />
      </div>
      <div>
        <h4>{t("phrase")}</h4>
        <p>{t("p3")}</p>
        <List
          list={t("li3", { returnObjects: true })}
          icon={<TbPointFilled style={{color:"var(--grisOscuro)"}}/>}
        />
      </div>
    </div>
    </>
  );
};
export default Corporativos