import React from "react";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";


function Breadcrumbs(){
  return(
    <div className="relative w-full" style={{height:150}}>
      <img src="/img-nosotros/business.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
      <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-row items-center justify-between px-5 md:px-10 lg:px-20 xl:px-40">
        <div className="flex flex-row gap-2 items-center">
          <FaBuildingColumns color="white" style={{height:20, width:20}} />
          <h2 className="text-3xl text-white font-bold">Nosotros</h2>
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
              <Link to="#" className="hover:text-azulClaro text-azulClaro transform transition-transform hover:scale-110">Nosotros</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};