import React from "react";
import { useTranslation } from "react-i18next";
import { Email } from "../../components/ui/Questions";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaRegUser, FaRegCalendar, FaRegBookmark } from "react-icons/fa";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineSchool } from "react-icons/md";
import { RiLandscapeLine } from "react-icons/ri";
import { Line1 } from "../../components/ui/Line";


function Contactos() {
  const { t, i18n } = useTranslation("contactos");
  return(
    <>
    {/* BREADCRUMB */}
    <div className="relative w-full" style={{height:150}}>
      <img src="/src/assets/img-nosotros/business.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
      <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-row px-5 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <MdContactMail color="white" style={{height:20, width:20}} />
          <h2 className="text-3xl text-white font-bold">Contactanos</h2>
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
    {/* CONTACT SECTION */}
    <section className="pt-10 px-5 md:px-10 w-full">
      <div className="w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full">
          <h4 className="">{t("subtitle")}</h4>
          <h2 className="text-primary"><b>{t("title")}</b></h2>
          <Line1 bgColorClass={"bg-primary"}/>
          <p className="mt-5">{t("p")}</p>
          <div className="mt-8">
            {t("emails", { returnObjects: true }).map((li, index) => (
              <Email
                key={index}
                text={li.type}
                content={li.content}
                email={li.email}
                icon={<MdOutlineMailOutline/>}
              />
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="bg-grisFondo p-5 rounded-lg">
            <h3 className="text-center text-primary">Formulario para contactarnos</h3>
            <form action="" className="mt-5 bg-white flex flex-col gap-5 p-5 rounded-lg shadow-lg">
              <div class="relative bg-inherit">
                <input
                  type="text"
                  className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                  placeholder="Nombre completos"
                />
                <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <FaRegUser style={{color:"var(--primary)"}}/>
                </span>
              </div>
              <div class="relative bg-inherit">
                <input
                  type="text"
                  className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                  placeholder="Email"
                />
                <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <MdOutlineEmail style={{color:"var(--primary)"}}/>
                </span>
              </div>
              <div class="relative bg-inherit">
                <input
                  type="text"
                  className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                  placeholder="Teléfono"
                />
                <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <MdOutlinePhone style={{color:"var(--primary)"}}/>
                </span>
              </div>
              <div class="relative bg-inherit">
                <input
                  type="text"
                  className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                  placeholder="Edad"
                />
                <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <FaRegCalendar style={{color:"var(--primary)"}}/>
                </span>
              </div>
              <div class="relative bg-inherit">
                <input
                  type="text"
                  className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                  placeholder="País o región"
                />
                <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <RiLandscapeLine style={{color:"var(--primary)"}}/>
                </span>
              </div>
              <div class="relative bg-inherit">
                <input
                  type="text"
                  className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                  placeholder="Grado de intrucción"
                />
                <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <FaRegBookmark style={{color:"var(--primary)"}}/>
                </span>
              </div>
              <div class="relative bg-inherit">
                <input
                  type="text"
                  className="block w-full h-10 pl-8 pr-3 text-sm text-gray-700 border focus:outline-none rounded shadow-sm focus:border-primary"
                  placeholder="Carrera o programa de elección"
                />
                <span class="absolute inset-y-0 left-0 flex items-center justify-center ml-2">
                  <MdOutlineSchool style={{color:"var(--primary)"}}/>
                </span>
              </div>
              <button className="p-2 rounded-lg bg-primary hover:bg-azulOscuro text-white"><b>Enviar</b></button>
            </form>
          </div>
          <div className="mt-10">
            <h3 className="text-center text-primary mb-5">Tambien puede contactarnos por nuestras redes sociales</h3>
            <SocialsBlock/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

const SocialsBlock = () => (
  <div className="grid grid-cols-3 items-center gap-2 w-full">
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-whatsapp p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaWhatsapp/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-telegram p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaTelegramPlane/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-facebook p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaFacebookF/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-linkedin p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaLinkedin/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-twitter p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaTwitter/>
    </a>
    <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp"
      className="grid h-full place-content-center text-3xl text-white bg-instagram p-1 rounded-lg transform transition-transform hover:scale-105 py-2"
    >
      <FaInstagram/>
    </a>
  </div>
);

export { Contactos };