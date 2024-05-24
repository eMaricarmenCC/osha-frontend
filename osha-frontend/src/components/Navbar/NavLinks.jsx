import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navlinks } from "./Mylinks";


const NavLinks = () => {
  const [heading, setHeading] = useState("");
  return (
    <div>
      <hr className="border-t border-gray-300" />
      {/* Menu */}
      {navlinks.map((link, index) => (
        <div key={index}>
          {link.submenu ? (
            <div className="flex flex-row items-center gap-2 hover:bg-blue-100"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <span>{link.icon}</span>
              <span className=" text-md py-5 flex justify-between items-center md:pr-0 group text-primary">
                {link.name}
              </span>
              <span className="text-xl md:hidden inline text-primary ml-auto">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
            </div>
          ) : (
            <NavLink to={link.link} className="flex flex-row items-center gap-2">
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