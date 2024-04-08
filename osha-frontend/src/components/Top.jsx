import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";


function Top(){
  return (
    <section className="px-4 py-3 flex flex-row bg-primary">
      
      {/* Contacto */}
      <div className="w-2/4">
        <ul>
          <li>
            <a href="" className="flex flex-row gap-1 items-center text-sm">
              <HiOutlineMail color='white' />
              <span className="text-white">info@osha.es</span>
            </a>
          </li>
        </ul>          
      </div>
      
      {/* Aula virtual */}
      <div className="w-1/4 flex justify-center">
        <Link to="/aulaosha/login">
          <a href="" className="flex flex-row gap-1 items-center text-sm">
            <PiStudentFill color='white'/>
            <span className="text-white">Aula virtual</span>
          </a>
        </Link>
      </div>     
      
      {/* Lenguaje */}
      <div className="w-1/4 flex justify-end">
        <ul>
          <li>
            <a href="">
              <span></span>
              <span></span>
            </a>
          </li>
          <li>
            <a href="" className="flex flex-row gap-1 items-center text-sm">
              <GrLanguage color="white"/>
              <span className="text-white">Lenguaje</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
export default Top