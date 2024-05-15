import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from '../pathMenu/MenuItemsPath';

import { FaRegUserCircle } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import { IoIosLogOut } from 'react-icons/io';


function SideBarMenu({ children }) {

  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("isOpen")) || false
  );
  const [activeItemIndex, setActiveItemIndex] = useState(
    JSON.parse(localStorage.getItem("activeItemIndex")) || 0
  );

  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const handleItemClick = (index) => setActiveItemIndex(index);

  useEffect(() => {
    localStorage.setItem("activeItemIndex", JSON.stringify(activeItemIndex));
  }, [activeItemIndex]);

  useEffect(() => {
    localStorage.setItem("isOpen", JSON.stringify(isOpen));
  }, [isOpen]);


  return (
    <div className='container_sidebar'>
      <div style={isOpen ? { width: "210px"} : { width: "110px", padding: "20px 5px", gap: 15}} className="sidebar">
        <div className="burger" style={{ justifyContent: isOpen ? "" : "center" }}>
          <IoMenu color='white' onClick={toggle} style={{ width:35, height:35 }}/>
        </div>
        <div className="user">
          <div className="user-container" style={{
            border: isOpen ? "2px solid #fff" : "",
            justifyContent: isOpen ? "" : "center",
          }}>
            <div className="userIconContainer">
              <FaRegUserCircle color='white' style={{ width:35, height:35 }} />
            </div>
            <div
                className="userData"
                style={{
                    display: isOpen ? "block" : "none",
                }}
            >
                <p className="text">Name </p>
                <p className="text">Lastname</p>
            </div>
          </div>
        </div>               
        <div className='contenedor-mc'
            style={{ width: isOpen ? "" : "100px", alignItems: isOpen ? "stretch" : "center"}}
        >         
          {
              menuItems().map((item, index) => (
                <React.Fragment key={item.name}>                  
                    <SidebarItem
                      item={item}
                      isOpen={isOpen}
                      active={index === activeItemIndex}
                      onClick={() => handleItemClick(index)}
                    />
                </React.Fragment>
              ))
          }                                        
        </div>             
        <div className="footerSideBar"
            style={{justifyContent: isOpen ? "end" : "center",}}
        >
          <div className="logout_container">
            <p className='text' style={{display: isOpen ? "block" : "none",}}>Cerrar Sesión</p>
            <IoIosLogOut color='white' style={{ width:28, height:28 }} />
          </div>
        </div>
      </div>
      <main className='bg-grisFondo'>{children}</main>
    </div>
    )
};

function SidebarItem({ item, isOpen, active, onClick }) {
  const { path, iconWhite, name } = item;
  const isComponent = item.isComponent || false;
  
  return (
    <NavLink
      to={path}
      className={`link-item ${isOpen ? "" : "comprimido"} ${active ? "active" : ""}`}
      onClick={onClick}
      style={{ justifyContent: isOpen ? "" : "center" }}
      key={name}
    >
      <div className={`${isOpen ? isComponent ? "iconCom" : "iconMod" : isComponent ? "iconComComp" : "iconModComp"}`}>
        {iconWhite}
      </div>
      <p className={`${isOpen ? "text" : "textComp"}`}>{name}</p>
    </NavLink>
  );
}

export default SideBarMenu;