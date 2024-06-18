import React, { useState } from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaYoutube, FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


function Footer(){
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { name: 'Item 1', description: 'Descripción del Item 1' },
    { name: 'Item 2', description: 'Descripción del Item 2' },
    { name: 'Item 3', description: 'Descripción del Item 3' },
  ];
  return (
    <footer>
      <div className="bg-primary pt-9">
        <div className="mx-auto w-full max-w-[1170px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] lg:flex-row md:px-10">
            {/* */}
            <div className="md:w-[316px]">
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
            {/** */}
            <div className="md:w-[400px]">
              <div className="mt-[23px] flex">
                <div className="flex">
                <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Pages</p>
                  <ItemList items={items} onSelectItem={setSelectedItem} />
                  <ItemDetail selectedItem={selectedItem} />
                </div>
              </div>
            </div>
            {/** */}
            <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
              <div className="mt-6 flex flex-col gap-5 sm:mt-0">
                <div className="flex flex-col gap-3">
                  <p className="text-white font-inter text-[16px] font-semibold">Contacta con nosotros</p>
                  <div className="flex">
                    <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z"
                          fill="white"></path>
                      </svg>
                    </div>
                    <div className="ml-[18px]">
                      <a href="mailto:help@lorem.com" className="font-Inter text-[14px] font-medium text-[#fff]">info@osha.com</a>
                      <p className="font-Inter text-[12px] font-medium text-[#fff]">Support Email</p>
                    </div>
                  </div>
                  <SocialShare/>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-white font-inter text-[16px] font-semibold">Realice un pago aquí</p>
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
    <div className="w-1/3 p-4 border-r">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mt-[15px]" onClick={() => onSelectItem(item)}>
            <a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold">       
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
    return <div className="w-2/3 p-4">Selecciona un ítem de la lista.</div>;
  }

  return (
    <div className="w-2/3 p-4">
      <h2 className="text-2xl font-bold">{selectedItem.name}</h2>
      <p>{selectedItem.description}</p>
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

export default Footer