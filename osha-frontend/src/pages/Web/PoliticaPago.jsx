import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { ListIcon } from "../../components/ui/List";
import { ButtonEmailInfo } from "../../components/ui/Button";
import { ImageWithInnerBorder } from "../../components/ui/Image";

import { AiFillSafetyCertificate } from "react-icons/ai";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { BsFileMedical } from "react-icons/bs";


function PoliticaPago() {
  const { t, i18n } = useTranslation("politicapago");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("registrationPaymentCancellationPolicy.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-14">
        <div>
          <h1 className="text-primary font-bold uppercase">{t("registrationPaymentCancellationPolicy.title")}</h1>
          <Line1 bgColorClass={"bg-secondary"}/>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="">
              <p className="mt-6">{t("registrationPaymentCancellationPolicy.description")}</p>
              <ListIcon
                list={t("registrationPaymentCancellationPolicy.list", { returnObjects: true })}
                icon={<HiMiniCheckBadge style={{color:"var(--primary)"}}/>}
              />
              <div className="mt-6">
                {t("registrationPaymentCancellationPolicy.p", { returnObjects: true }).map((li, index) => (
                  <p key={index} className="mt-3">{li}</p>
                ))}
              </div>
            </div>
            <div className="max-w-[400px] 2xl:max-w-[400px] mx-auto">
              <ImageWithInnerBorder
                src="/src/assets/img/payment-policy.png"
                alt="transparencia"
              />
          </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-primary font-bold uppercase">{t("paymentCancellationPolicy.title")}</h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-5">{t("paymentCancellationPolicy.description")}</p>
        </div>
        <div className="mt-10">
          <h3 className="text-primary font-bold uppercase">{t("In-personCoursesOtherServices.title")}</h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-5">{t("In-personCoursesOtherServices.description")}</p>
        </div>
        <div className="mt-10">
          <h3 className="text-primary font-bold uppercase">{t("cancellationServiceReturns.title")}</h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-5">{t("cancellationServiceReturns.description")}</p>
          <div className="mt-10 flex flex-col md:flex-row gap-5 p-5 bg-gray-100 rounded-lg items-center ">
            <div>
              <h4 className="text-sky-600 font-semibold">{t("cancellationServiceReturns.hospitalizationMedicalPrescription.title")}</h4>
              <p className="mt-4">{t("cancellationServiceReturns.hospitalizationMedicalPrescription.description")}</p>
            </div>
            <div className="min-w-[120px] min-h-[120px] bg-primary rounded-full flex items-center justify-center">
              <AiOutlineMedicineBox style={{color:"var(--white)", height:90, width:90}}/>
            </div>
          </div>
          <div className="mt-10 flex flex-col md:flex-row gap-5 p-5 bg-gray-100 rounded-lg items-center ">
            <div className="min-w-[120px] min-h-[120px] bg-primary rounded-full flex items-center justify-center">
              <BsFileMedical style={{color:"var(--white)", height:80, width:80}}/>
            </div>
            <div className="">
              <h4 className="text-primary font-semibold">{t("cancellationServiceReturns.dueToForceMajeure.title")}</h4>
              {t("cancellationServiceReturns.dueToForceMajeure.description", {returnObjects: true}).map((p,index) => (
                <p key={index} className="mt-2">{p}</p>
              ))}
            </div>
          </div>
        </div>
        <ButtonEmailInfo />
      </div>
    </section>
  );
};

export { PoliticaPago }