import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import i18n from '../config/i18next.config';
import { useTranslation } from "react-i18next";


function Top(){

  const { t, i18n } = useTranslation("labels");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className="px-4 py-3 flex flex-col md:flex-row gap-4 bg-primary items-center justify-between">
      
      {/* Social Share */}
      <div className="hidden md:block">
        <div className="flex gap-1 items-center">
          <span className="bg-whatsapp p-1 rounded-lg border border-white transform transition-transform hover:scale-110">
            <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp">
              <FaWhatsapp color="white" />
            </a>
          </span>
          <span className="bg-telegram p-1 rounded-lg border border-white transform transition-transform hover:scale-110">
            <a href="https://t.me/Oshainstitute" target="_blank" title="Telegram">
              <FaTelegramPlane color="white" />
            </a>
          </span>
          <span className="bg-facebook p-1 rounded-lg border border-white transform transition-transform hover:scale-110">
            <a href="https://www.facebook.com/OSHAINSTITUTE" target="_blank" title="Facebook">
              <FaFacebookF color="white" />
            </a>
          </span>
          <span className="bg-linkedin p-1 rounded-lg border border-white transform transition-transform hover:scale-110">
            <a href="https://www.linkedin.com/company/occupationalsafetyhealthadministration" target="_blank" title="LinkedIn">
              <FaLinkedin color="white" />
            </a>
          </span>
          <span className="bg-twitter p-1 rounded-lg border border-white transform transition-transform hover:scale-110">
            <a href="https://twitter.com/Oshainst?t=PJGZ6VMgSFrA1Vo0bVGoIQ&amp;s=09" target="_blank" title="Twitter">
              <FaTwitter color="white" />
            </a>
          </span>
          <span className="bg-instagram p-1 rounded-lg border border-white transform transition-transform hover:scale-110">
            <a href="https://instagram.com/osha.institute?igshid=MTIzZWQxMDU=" target="_blank" title="Instagram">
              <FaInstagram color="white" />
            </a>
          </span>
          <span className="pl-1">
            <a href="" className="flex flex-row gap-1 items-center text-sm">
              <HiOutlineMail color='white' />
              <span className="text-white">info@osha.es</span>
            </a>
          </span>
        </div>
      </div>      
      
      <div className="flex flex-row gap-4">

        {/* Aula virtual */}
        <span className="flex">
          <Link to="https://testing.aulavirtual.osha.es/login" className="flex flex-row gap-2 py-1 px-3 rounded-lg border border-white justify-center items-center transform transition-transform hover:scale-110">
            <PiStudentFill color='white'/>
            <span className="text-white text-sm">{t("virtualClassroom")}</span>
          </Link>
        </span>

        {/* Lenguaje */}
        <div className="flex gap-2 justify-end">
          <a href="" className="flex flex-row gap-1 items-center text-sm">
            <GrLanguage color="white"/>
            <span className="text-white">{t("language")}</span>
          </a>
          <select onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language} className="bg-primary text-white text-sm border border-white">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

      </div>
      
      
    </section>
  )
}
export default Top