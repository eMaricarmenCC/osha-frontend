import React, { useState } from "react";
import '../styles/Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import logoOsha from '/src/assets/logo/logoOsha.png';
import { NavLink } from "react-router-dom";

function Header(){
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
          <NavLink to='/' className="" >Inicio</NavLink>
          <NavLink to='/our' className="" >Nosotros</NavLink>
          <NavLink to='/standars' className="" >Estándares</NavLink>
          <NavLink to='/acreditation' className="" >Acreditación</NavLink>
          <NavLink to='/grade' className="" >Grados</NavLink>
          <NavLink to='/corporatives' className="" >Corporativos</NavLink>
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