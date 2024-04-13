import React, { useState } from "react";
import '../styles/Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import logoOsha from '/src/assets/logo/logoOsha.png';
import { Link } from "react-router-dom";

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
          <Link to='/' className="" >Inicio</Link>
          <Link to='/our' className="" >Nosotros</Link>
          <Link to='/standars' className="" >Estándares</Link>
          <Link to='/acreditation' className="" >Acreditación</Link>
          <Link to='/grade' className="" >Grados</Link>
          <Link to='/corporatives' className="" >Corporativos</Link>
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