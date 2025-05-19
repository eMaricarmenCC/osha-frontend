import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { List } from "../../components/ui/List";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { ButtonEmailInfo } from "../../components/ui/Button";
import { Line1 } from "../../components/ui/Line";
import empresas from "../../utils/empresas";
import { PiSealCheckBold } from "react-icons/pi";
import { FaBuildingColumns } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";


function Sedes() {
  const { t, i18n } = useTranslation("sedes");

  const [codigo, setCodigo] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleBuscar = () => {
    const info = empresas[codigo.trim()];
    setResultado(info || { error: "Código no reconocido" });
  };

  return(
    <section>
      <Breadcrumbs
        text={"Sedes"}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-16 w-full bg-gray-100">
        <h1 className="text-primary uppercase font-bold">{t("locations.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        {/* Verificacion de sede por código */}
        <div className="mt-10">
          <h4 className="font-bold text-gray-500 uppercase">Verificación de empresa por código</h4>
          <div className="mt-2 mx-auto bg-white p-5 rounded-lg flex items-center gap-5 shadow-lg">
            <PiCertificate style={{color:"var(--secondary)", height:50, width:50}}/>
            <div className="relative w-full bg-white rounded-full">
              <input
                placeholder="Ingrese el código de la empresa"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-sky-200 focus:border-sky-500"
                type="text"
              />
              <button
                type="submit"
                onClick={handleBuscar}
                className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-sky-600 sm:px-6 sm:text-base sm:font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 gap-2"
              >
                <IoMdSearch/>
                Buscar
              </button>
            </div>
          </div>
          {/* Resultado */}
          {resultado && (
            <div className="mt-6 bg-white p-6 rounded-r-xl shadow-lg border-l-8 border-sky-700">
              {resultado.error ? (
                <p className="text-red-500 font-semibold">{resultado.error}</p>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-primary">{resultado.centro}</h3>
                  <p><strong>Empresa:</strong> {resultado.empresa}</p>
                  <p><strong>País:</strong> {resultado.pais}</p>
                  <p><strong>Ciudad:</strong> {resultado.ciudad}</p>
                  <p className="mt-4 font-bold">Programas Habilitados:</p>
                  <ul className="list-disc list-inside">
                    {resultado.programas.map((prog, idx) => (
                      <li key={idx}>
                        <strong>{prog.codigo}</strong> — {prog.nombre}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
        <h3 className="mt-8 font-bold text-sky-600">{t("locations.authorizedCenter.title")}</h3>
        <h4 className="mt-3">{t("locations.authorizedCenter.subtitle")}</h4>
        <p className="mt-5">{t("locations.authorizedCenter.description")}</p>
        <div className="mt-8">
          <Accordian className='flex flex-col gap-3' >
            <AccordianItem value='1' trigger={t("locations.authorizedCenter.benefits.title")}>
              <List
                list={t("locations.authorizedCenter.benefits.benefits", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
              <p>{t("locations.authorizedCenter.benefits.content")}</p>
            </AccordianItem>
            <AccordianItem value='2' trigger={t("locations.authorizedCenter.process.title")}>
              <List
                list={t("locations.authorizedCenter.process.process", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
            </AccordianItem>
            <AccordianItem value='3' trigger={t("locations.authorizedCenter.membershipFees.title")}>
              <List
                list={t("locations.authorizedCenter.membershipFees.membershipFees", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
            </AccordianItem>
          </Accordian>
          <p className="mt-10">{t("locations.authorizedCenter.complaints")}</p>
        </div>
        <ButtonEmailInfo />
      </div>
    </section>
  );
};
export { Sedes }