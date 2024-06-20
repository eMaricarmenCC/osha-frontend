import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

import { FaYoutube, FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

function Footer(){
  const [selectedItem, setSelectedItem] = useState(1);

  const items = [
    { id:1, name: 'Información', description: <Informacion/> },
    { id:2, name: 'Fundación osha-institute', description: <Fundacion/> },
    { id:3, name: 'Validación', description: <Validacion/> },
    { id:4, name: 'Transparencia', description: <Transparencia/> },
    { id:5, name: 'Accredited Education', description: <AccreditedEducation/> },
    { id:6, name: 'Privacidad', description: <Privacidad/> },
    { id:7, name: 'Representantes en el Mundo', description: <Representantes/> },
  ];
  return (
    <footer>
      <div className="bg-primary pt-9">
        <div className="px-5 md:px-10 lg:px-20 xl:px-40 w-full">
          <div className="flex flex-col justify-between lg:flex-row gap-5 lg:gap-10 2xl:gap-14">
            {/* Descripción OSHA */}
            <div className="lg:min-w-[200px] lg:w-[200px] xl:min-w-[220px] xl:w-[220px] 2xl:min-w-[290px]">
              <h1 className="text-white font-extrabold">
              <img
                className="h-10 w-auto"
                src="/src/assets/logo/logoOsha.png"
                alt="Osha Institute"
              />
              </h1>
              <p className="mt-[18px] text-[15px] font-normal text-white/[80%] text-sm">
                Occupational Safety Health Administration "Osha-Institute" es un corporativo internacional de entidades ligadas a la seguridad y salud en el trabajo y la prevención de riesgos laborales que lo conforman, Departamentos de Estado, Universidades, Instituciones de Formación, Centros de Investigación de Ingeniería e Institutos de Estándares Internacionales, presentes en más de 20 países.
              </p>
            </div>
            {/* Submenu */}
            <div className="lg:w-full">
              <div className="flex flex-col md:flex-row">
                <ItemList items={items} onSelectItem={setSelectedItem} />
                <ItemDetail selectedItem={selectedItem} />
              </div>
            </div>
            {/* Contact shared */}
            <div className="mt-6 flex flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="mt-6 flex flex-col md:flex-row lg:flex-col gap-5 sm:mt-0">
                {/* Contactanos */}
                <div className="flex flex-col gap-3">
                  <p className="text-white font-inter text-[16px] font-semibold">Contacta con nosotros</p>
                  {/* Email */}
                  <div className="flex items-center justify-center border rounded p-2">
                    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%] text-3xl">
                      <MdOutlineEmail color='white'/>
                    </div>
                    <div className="ml-[18px]">
                      <a href="mailto:help@lorem.com" className="font-Inter text-[14px] font-medium text-[#fff]">info@osha.com</a>
                      <p className="font-Inter text-[12px] font-medium text-[#fff]">Support Email</p>
                    </div>
                  </div>
                  {/* Social share */}
                  <div className="mt-2">
                    <SocialShare/>
                  </div>
                </div>
                {/* Pago */}
                <div className="flex flex-col gap-3">
                  <p className="text-white font-inter text-[16px] font-semibold">Realice un pago aquí</p>
                  <PayPalScriptProvider>
                    <PayPalButtons
                      style={{
                        layout: "horizontal",
                      }}
                    />
                </PayPalScriptProvider>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-[30px] text-white" />
          <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
            <p className="text-[10px] font-normal text-white md:text-[12px]">
              © Todos Los Derechos Reservados OSHA.ES
            </p>
          </div>
        </div>
      </div>  
    </footer>
  )
}

const ItemList = ({ items, onSelectItem }) => {
  return (
    <div className="w-2/5 pr-2">
      <h4 className="text-white font-inter text-[18px] font-medium leading-normal">Páginas</h4>
      <ul className="mt-5">
        {items.map((item, index) => (
          <li key={index} className="mt-2 flex" onClick={() => onSelectItem(item)}>
            <IoIosArrowForward color='white'/>
            <a className="ml-1 text-white/[80%] hover:text-white font-inter text-[14px] hover:font-semibold uppercase">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemDetail = ({ selectedItem }) => {
  if (!selectedItem) {
    return <div className="w-3/5 pl-4">Selecciona un ítem de la lista.</div>;
  }

  return (
    <div className="w-3/5 pl-2">
      <h3 className="text-sm text-white/[80%] font-semibold uppercase">{selectedItem.name}</h3>
      <div className="mt-2 flex flex-row">
        <div className="w-4 border-t"></div>
        <div className="w-2 "></div>
        <div className="w-10 border-t"></div>
      </div>
      {selectedItem.description}
    </div>
  );
};

const SocialShare = () => {
  return (
    <div>
      <div className="flex flex-row gap-1 items-center justify-center">
        <span className="bg-youtube p-1 rounded-lg border border-white transform transition-transform hover:scale-110">
          <a href="https://www.youtube.com/channel/UC-dGYMa8PxA6L6dIWF1DwZA" target="_blank" title="youtube">
            <FaYoutube color="white" />
          </a>
        </span>
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
      </div>
    </div>
  )
}

const Informacion = () => {
  const items = [
    { id:1, name: 'Cumplimiento de regulaciones', link: '/cumplimiento' },
    { id:2, name: 'Sobre nosotros', link: '/nosotros' },
    { id:3, name: 'Código de conducta profesional', link: '/codigo-conducta' },
    { id:4, name: 'Conoce más a Osha-Institute', link: '/conoce-osha' },
    { id:5, name: 'Calidad educativa', link: '/calidad-educativa' },
    { id:6, name: 'Certificados y Credenciales', link: '/credenciales' },
    { id:7, name: 'Código de Calidad', link: '' },
    { id:8, name: 'Política de pago y cancelación de matrículas', link: '/politica-pago' },
  ];
  return(
    <ul className="mt-5">
      {items.map((item, index) => (
        <li key={index} className="mt-2 flex">
          <IoIosArrowForward color='white'/>
          <Link
            to={item.link}
            className="ml-1 text-white/[80%] hover:text-white font-inter text-[14px] hover:font-semibold"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Fundacion = () => {
  const items = [
    { id:1, name: '¿Qué es la fundación OSHA-Institute', link: '/fundacion-osha' },
  ];
  return(
    <ul className="mt-5">
      {items.map((item, index) => (
        <li key={index} className="mt-2 flex" onClick={() => onSelectItem(item)}>
          <IoIosArrowForward color='white'/>
          <Link
            to={item.link}
            className="ml-1 text-white/[80%] hover:text-white font-inter text-[14px] hover:font-semibold"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Validacion = () => {
  const items = [
    { id:1, name: 'Verificar un Negocio en mi Pais', link: '/sedes' },
    { id:2, name: 'Verificar a un Instructor de mi Pais', link: '/membresia' },
  ];
  return(
    <ul className="mt-5">
      {items.map((item, index) => (
        <li key={index} className="mt-2 flex" onClick={() => onSelectItem(item)}>
          <IoIosArrowForward color='white'/>
          <Link
            to={item.link}
            className="ml-1 text-white/[80%] hover:text-white font-inter text-[14px] hover:font-semibold"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Transparencia = () => {
  return(
    <div>
      <p className="mt-4 text-white/[80%] text-sm">Occupational Safety Health Administration “OSHA-INSTITUTE” es una organización privada sin fines de lucro creada para fortalecer las competencias profesionales basadas a las normas de OSHA de los Estados Unidos además es una casa de estudios particular que brinda educación especializada de grado y posgrado adoptando los estándares propuestos por OSHA-EE.UU, ANSI, ASME, NFPA y NIOSH, sin referenciar la relación con otras organizaciones además no está conectada ni afiliada al Departamento de Trabajo de EE. UU. (DOL) ni a la Occupational Safety and Health Administration “OSHA”.</p>

    </div>
  );
};

const AccreditedEducation = () => {
  return(
    <div>
      <p className="mt-4 text-white/[80%] text-sm">Acredited Education, es el sello que nos reconoce por los programas y métodos educativos selectos y de calidad garantizando además que somos un principal proveedor de servicios de consulta de seguridad, seminarios y clases de capacitación en seguridad dirigidos por instructores de amplia experiencia y acreditados, capacitación en línea , evaluaciones del sitio , desarrollo de programas escritos , representación regulatoria y otros servicios ergonómicos y ambientales calificado como formación educativa de calidad.</p>
    </div>
  );
};

const Privacidad = () => {
  return(
    <div>
      <p className="mt-4 text-white/[80%] text-sm">Las imágenes, lecciones, programas, etiquetas y otros encontradas en este portal web son de referencia usada solo para fines educativos, cada uno de los programas de entrenamiento, especialidad o postgrado fueron diseñados con la única finalidad de promover el cumplimiento de normas internacionales a nivel mundial, el material encontrado en cada uno de nuestros programas son material especifico usado para la formación profesional en diversas materias y áreas independientes de producción, los estudiantes de OSHA-INSTITUTE pueden dar el uso adecuado a su estudio personal.</p>
    </div>
  );
};

const Representantes = () => {
  const items = [
    { id:1, name: 'Representante en Pakistán', link: '/representante-pakistan' },
    { id:2, name: 'Representante en Londres', link: '/representante-londres' },
  ];
  return(
    <ul className="mt-5">
      {items.map((item, index) => (
        <li key={index} className="mt-2 flex" onClick={() => onSelectItem(item)}>
          <IoIosArrowForward color='white'/>
          <Link
            to={item.link}
            className="ml-1 text-white/[80%] hover:text-white font-inter text-[14px] hover:font-semibold"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};


export default Footer