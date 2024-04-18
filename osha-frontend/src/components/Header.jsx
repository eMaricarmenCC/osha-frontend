import React, { useState } from "react";
import '../styles/Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import logoOsha from '/src/assets/logo/logoOsha.png';
import { NavLink } from "react-router-dom";
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
    <section className="h-wrapper">
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
    </section>
  )
}
export default Header