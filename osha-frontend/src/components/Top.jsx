import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaWhatsapp, FaTelegramPlane, FaFacebookF, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


function Top(){
  return (
    <section className="px-4 py-3 flex flex-row bg-primary">
      
      {/* Social Share */}
      <div className="">
        <div className="flex gap-1">
          <span className="bg-green p-1 rounded-lg border border-white">
            <a href="https://wa.me/message/YK4GCWUIXVHOK1" target="_blank" title="WhatsApp">
              <FaWhatsapp color="white" />
            </a>
          </span>
          <span className="bg-telegram p-1 rounded-lg border border-white">
            <a href="https://t.me/Oshainstitute" target="_blank" title="Telegram">
              <FaTelegramPlane color="white" />
            </a>
          </span>
          <span className="bg-facebook p-1 rounded-lg border border-white">
            <a href="https://www.facebook.com/OSHAINSTITUTE" target="_blank" title="Facebook">
              <FaFacebookF color="white" />
            </a>
          </span>
          <span className="bg-linkedin p-1 rounded-lg border border-white">
            <a href="https://www.linkedin.com/company/occupationalsafetyhealthadministration" target="_blank" title="LinkedIn">
              <FaLinkedin color="white" />
            </a>
          </span>
          <span className="bg-twitter p-1 rounded-lg border border-white">
            <a href="https://twitter.com/Oshainst?t=PJGZ6VMgSFrA1Vo0bVGoIQ&amp;s=09" target="_blank" title="Twitter">
              <FaTwitter color="white" />
            </a>
          </span>
          <span className="bg-instagram p-1 rounded-lg border border-white">
            <a href="https://instagram.com/osha.institute?igshid=MTIzZWQxMDU=" target="_blank" title="Instagram">
              <FaInstagram color="white" />
            </a>
          </span>
        </div>
      </div>
      
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
        <Link to="/login">
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