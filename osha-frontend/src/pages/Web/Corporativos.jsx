import React from "react";
import { useTranslation } from "react-i18next";
import { List, ListResponsive } from "../../components/ui/List";
import { BsPatchCheck } from "react-icons/bs";


function Corporativos(){
  return (
    <>
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
    <div className="px-5 py-10 lg:px-20 xl:px-20 mt-20">
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
          <ol>
            {t("certex.benefits.workers.content", { returnObjects: true }).map((li, index) => (
              <li key={index} className="mt-2">{li}</li>
            ))}
          </ol>
        </div>
        <div>
          <h4>{t("certex.benefits.companies.title")}</h4>
          <ol>
            {t("certex.benefits.companies.content", { returnObjects: true }).map((li, index) => (
              <li key={index} className="mt-2">{li}</li>
            ))}
          </ol>
        </div>
      </div>
      <div>
        <h3>{t("certex.process.title")}</h3>
        <ol>
          {t("certex.process.content", { returnObjects: true }).map((li, index) => (
            <li key={index} className="mt-2">{li}</li>
          ))}
        </ol>
      </div>
      <div>
        <h3>{t("certex.occupationalProfiles.title")}</h3>
        <p>{t("certex.occupationalProfiles.content")}</p>
        <div>
          <h4>{t("certex.occupationalProfiles.mining.title")}</h4>
          <ul>
            {t("certex.occupationalProfiles.mining.li", { returnObjects: true }).map((li, index) => (
              <li key={index} className="">{li}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t("certex.occupationalProfiles.basicManagementAreas.title")}</h4>
          <ul>
            {t("certex.occupationalProfiles.basicManagementAreas.li", { returnObjects: true }).map((li, index) => (
              <li key={index} className="">{li}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t("certex.occupationalProfiles.Administrative.title")}</h4>
          <ul>
            {t("certex.occupationalProfiles.Administrative.li", { returnObjects: true }).map((li, index) => (
              <li key={index} className="">{li}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t("certex.occupationalProfiles.Industrial.title")}</h4>
          <ul>
            {t("certex.occupationalProfiles.Industrial.li", { returnObjects: true }).map((li, index) => (
              <li key={index} className="">{li}</li>
            ))}
          </ul>
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
        <ul>
          {t("li2", { returnObjects: true }).map((li, index) => (
            <li key={index} className="">{li}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>{t("phrase")}</h4>
        <p>{t("p3")}</p>
        <ul>
          {t("li3", { returnObjects: true }).map((li, index) => (
            <li key={index} className="">{li}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};
export default Corporativos