import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { FaHome, FaBook } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";



const NavLinks = () => {
  const { t, i18n } = useTranslation("labels");
  const navlinks = [
    {
      name: t("home"),
      submenu: false,
      link: "/",
      icon: <FaHome style={{color:"var(--primary)", width:20, height:20 }}/>
    },
    {
      name: t("us"),
      submenu: true,
      sublinks: [
        { name: t("aboutus"), link: "/nosotros" },
        { name: t("ouridentity"), link: "/nuestra-identidad" },
        { name: t("cooperation"), link: "/cooperacion-internacional" },
        { name: t("privacy"), link: "/declaracion-privacidad" },
        { name: t("standards"), link: "/estandares-osha" },
      ],
      icon: <FaBuildingColumns style={{color:"var(--primary)", width:20, height:20 }}/>
    },
    {
      name: t("accreditation"),
      submenu: true,
      sublinks: [
        { name: t("accreditation"), link: "/acreditacion" },
        { name: t("accreditationae"), link: "/adreditacion-ae" },
      ],
      icon: <AiFillSafetyCertificate style={{color:"var(--primary)", width:20, height:20 }}/>
    },
    {
      name: t("academy"),
      submenu: true,
      sublinks:  [
        { name: t("degrees"), link: "/grados" },
        { name: t("courses"), link: "/cursos" },
        { name: t("freecourses"), link: "/cursos-gratuitos" },
      ],
      icon: <IoMdSchool style={{color:"var(--primary)", width:20, height:20 }}/>
    },
    {
      name: t("degrees"),
      submenu: false,
      link: "/grados",
      icon: <FaBook style={{color:"var(--primary)", width:20, height:20 }}/>
    },
  ];
  const [heading, setHeading] = useState("");
  return (
    <div>
      <hr className="border-t border-gray-300" />
      {/* Menu */}
      {navlinks.map((link, index) => (
        <div key={index}>
          {link.submenu ? (
            <div className="flex flex-row items-center gap-2 hover:bg-blue-100 px-4 rounded-lg"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <span>{link.icon}</span>
              <span className=" text-md py-5 flex justify-between items-center md:pr-0 group text-primary">
                {link.name}
              </span>
              <span className="text-xl inline text-primary ml-auto">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </div>
          ) : (
            <NavLink to={link.link} className="flex flex-row items-center gap-2 px-4 rounded-lg">
              <span>{link.icon}</span>
              <span className=" text-md py-5 flex justify-between items-center md:pr-0 group text-primary">
                {link.name}
              </span>
            </NavLink>
          )}
          <hr className="border-t border-gray-300" />
          {/* sublinks */}
          {link.submenu && (
            <div
              className={`${heading === link.name ? "md:hidden" : "hidden"}`}
            >
              <ul>
                {link.sublinks.map((slink, index) => (
                  <li key={index} className="pl-7 py-2 text-grisOscuro rounded-lg hover:bg-blue-100 hover:text-primary">
                    <NavLink to={slink.link}>
                      {slink.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavLinks;