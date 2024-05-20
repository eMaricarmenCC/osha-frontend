import React, { useState } from "react";
//import '../styles/Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import logoOsha from '/src/assets/logo/logoOsha.png';
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header(){

  const { t, i18n } = useTranslation("labels");

  const [click, setClick] = useState(false);

  const [menuOpened, setMenuOpened] = useState(false);
  
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800){
      return {right: !menuOpened && "-100%"}
    }
  }

  return (
    <>
    <nav className="bg-white py-5 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link to="/" className="flex items-center">
          <img src='/src/assets/logo/logoOsha.png' alt="Osha logo"  className="h-8 mr-3 sm:h-16"/>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <a href="https://themesberg.com/product/tailwind-css/landing-page"
            className="text-xl text-white bg-azulMedio hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
              {t("contactUs")}
          </a>
          <button data-collapse-toggle="mobile-menu-2" type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2" aria-expanded="true">
				    <span className="sr-only">Open main menu</span>
            <BiMenuAltRight className="w-6 h-6"/>
            {/*className="w-6 h-6"*/}
				    {/*className="hidden w-6 h-6"*/}
			    </button>
        </div>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink to='/'
                activeClassName='text-primary'
                className="text-xl block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                aria-current="page">
                  {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/us'
                activeClassName='text-primary'
                className="text-xl block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  {t("us")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/standards'
                activeClassName='text-primary'
                className="text-xl block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  {t("standards")}
              </NavLink>
            </li>
            <li>
              <NavLink to='/accreditation'
                className="text-xl block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  {t("accreditation")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/degrees"
                className="text-xl block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  {t("degrees")}
              </NavLink>
            </li>
            <li>
              <NavLink to='corporate'
                className="text-xl block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  {t("corporate")}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>

{/*<section className="h-wrapper">
      <div className="flex gap-10 flexCenter paddings innerWidth h-container">
        <img src='/src/assets/logo/logoOsha.png' alt="logo" width={100} />
        <OutsideClickHandler 
          onOutsideClick={()=>{
            setMenuOpened(false)
          }}
        />
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
          <NavLink to='/' className="" >{t("home")}</NavLink>
          <NavLink to='/us' className="" >{t("us")}</NavLink>
          <NavLink to='/standards' className="" >{t("standards")}</NavLink>
          <NavLink to='/accreditation' className="" >{t("accreditation")}</NavLink>
          <NavLink to='/degrees' className="" >{t("degrees")}</NavLink>
          <NavLink to='/corporate' className="" >{t("corporate")}</NavLink>
          <button className="button">
            <a href="">Contáctanos</a>
          </button>
        </div>
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
          <BiMenuAltRight  size={30} />
        </div>
      </div>      
        </section>]*/}
    </>
    
  )
};

export default Header