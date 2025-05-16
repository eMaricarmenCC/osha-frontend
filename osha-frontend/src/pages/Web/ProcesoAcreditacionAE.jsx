import { useTranslation } from "react-i18next";
import { Line1 } from "../../components/ui/Line";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { FaBuildingColumns } from "react-icons/fa6";
import { Link } from "react-router-dom";


function ProcesoAcreditacionAE() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <section>
      <Breadcrumbs
        text={"Proceso Acreditacion AE"}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14 bg-gray-50">
        <h1 className="text-primary font-bold uppercase">{t("process-acreditation.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10 flex flex-col lg:flex-row gap-5">
          <div>
            {t("process-acreditation.list", { returnObjects: true }).map((p, index) => (
              <div key={index} className="mb-3 bg-white rounded-lg border border-green-600 flex flex-row gap-2">
                <span className="text-white font-bold p-2 bg-green-600">{index+1}</span>
                <p className="p-2">{p}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6">{t("process-acreditation.p")}</p>
        <div className="mt-8">
          <Link to="/proceso_acreditacion_ae" className="text-[16px] py-2 px-4 min-w-[150px] text-center text-white bg-sky-600 border border-sky-600 rounded-md active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring">Incumplimientos</Link>
        </div>
      </div>
    </section>
  );
}

export { ProcesoAcreditacionAE }