import React from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Line, Line1, Line2 } from "./Line";
import { CiBarcode } from "react-icons/ci";
import { FaCentercode } from "react-icons/fa";


const CardImgText = ({ icon, title, text, backgroundClass, borderClass, textColorClass }) => {
  return (
    <div className={`p-5 ${backgroundClass} border-l-8 ${borderClass} rounded-r-lg shadow-lg flex items-center gap-3`}>
      <div>
        {icon}
      </div>
      <div>
        <h4 className={`${textColorClass}`}><b>{title}</b></h4>
        <p className="mt-2 text-xs">{text}</p>
      </div>
    </div>
  );
};

function GlowingGradientBorder() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="relative group cursor-pointer">
        <div
          className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
        </div>
        <div
          className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
          <div className="space-y-2">
            <p className="text-slate-800">Glowing Gradient Border</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function GradientBorder() {
  return (
    <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
      <div className="bg-white p-7 rounded-md">
        <h1 className="font-bold text-xl mb-2">Border gradient example</h1>
        <p>Create beautfiul cards with gradient borders with Tailwind CSS.</p>
      </div>  
    </div>
  )
}

function Form1() {
  return (
    <div className="py-10 px-5 bg-gray-800 flex flex-col justify-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg rounded-3xl sm:p-10">
          <div className="text-center">
            <h1 className="text-3xl">Contact Us!</h1>
            <p className="text-gray-300">
              Fill up the form below to send us a message.
            </p>
          </div>
        </div>  
      </div>
    </div>
  )
}

function CardTwoCards() {
  return (
    <div className="py-10 px-5 bg-gray-800 flex flex-col justify-center">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
            className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
        </div>
        <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg rounded-3xl sm:p-10">
          <div className="text-center">
            <h1 className="text-3xl">Contact Us!</h1>
            <p className="text-gray-300">
              Fill up the form below to send us a message.
            </p>
          </div>
        </div>  
      </div>
    </div>
  )
}

const Categories = ({icon, title, text, bgColorClass, titleColorClass, borderClass}) => {
  return(
    <div className={`${bgColorClass} flex p-4 gap-4 ${borderClass} border-l-4 transform transition-transform duration-350 hover:scale-105 items-center`}>
      <div className="">
        <h4 className={`${titleColorClass}`}><b>{title}</b></h4>
        <p className="mt-1">{text}</p>
      </div>
      <div className="">
        {icon}
      </div>
    </div>
  );
};

function HoverEffectCard({ backgroundColor, hoverColor, icon, text, link }){
  return(
    <div className={`group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300
                    hover:-translate-y-1 hover:shadow-2xl
                    sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10`}>
      <span className={`absolute top-10 z-0 h-20 w-20 rounded-full bg-${backgroundColor} transition-all duration-300 group-hover:scale-[10]`}></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className={`grid h-20 w-20 place-items-center rounded-full bg-${hoverColor} transition-all duration-300 group-hover:bg-${hoverColor}`}>
          {icon}
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>{text}</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a href={link} className={`text-${backgroundColor} transition-all duration-300 group-hover:text-white`}>Read the docs &rarr;</a>
          </p>
        </div>      
      </div>
    </div>
  )
}

function Section({}){
  return(
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">      
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road" />
      </div>
      {/* Text Column */}
      <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">        
        {/* Text Wrapper */}
        <div className="flex flex-col p-12 md:px-16">
          <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          {/* Button Container */}
          <div className="mt-8">
            <a href="#" className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">Read More</a>
          </div>
        </div>
      </div>      
    </div>
  );
};

function SectionImgContent({ imagePath, title, content, textButton, link }) {
  return (
    <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl xl:max-w-6xl md:pb-48 lg:pb-0">
      {/* Image Column */}
      <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img className="h-full w-full object-cover md:rounded-lg" src={imagePath} alt={title} />
      </div>
      {/* Text Column */}
      <div className="max-w-lg bg-white md:rounded-lg md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-22 xl:ml-12">
        {/* Text Wrapper */}
        <div className="flex flex-col p-10 md:px-15">
          <h2 className="text-xl font-bold uppercase text-primary lg:text-2xl">{title}</h2>
          <Line1 bgColorClass={"bg-secondary"} />
          <p className="mt-2">{content}</p>
          {/* Button Container */}
          <button className="flex mt-5">
            <Link to={link} className="px-8 py-3 bg-gradient-to-b from-azulMedio to-primary text-white font-semibold rounded-xl hover:shadow-lg transform transition-transform hover:scale-110">
              {textButton}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = ({icon, title, content, bgClass, textClass, bgCiClass }) => {
  return (
    <div className="flex flex-col">
      <div className={`mx-auto flex h-24 w-24 transform items-center justify-center rounded-full ${bgCiClass} shadow-lg shadow-gray-500/40 -mb-10`}>
          {icon}
        </div>
      <div className={`rounded-xl ${bgClass} pt-14 px-6 pb-6 text-center shadow-xl`}>
        <h1 className={`text-darken mb-3 ${textClass} text-lg font-medium`}><b>{title}</b></h1>
        <p className="text-gray-500">{content}</p>
      </div>
    </div>
  );
};

function Cardc({ colorBg, colorCi, icon, title, content }) {
  return (
    <div className={`rounded-xl bg-${colorBg} p-6 text-center shadow-xl`}>
      <div className={`mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-${colorCi} shadow-lg shadow-${colorCi}-500/40`}>
        {icon}
      </div>
      <h1 className="text-darken mb-3 text-lg font-medium lg:px-14">{title}</h1>
      <p className="px-4 text-gray-500">{content}</p>
    </div>
  );
}


function Card3() {
  return (
    <div className="relative max-w-xs max-h-80 bg-gradient-to-b from-blue-200 to-blue-400 rounded-lg p-8 m-4 text-center shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out">
      <p className="text-xl font-bold text-gray-800 mb-4">Product Name</p>
      <p className="text-sm text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
        officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
        eum nihil itaque!
      </p>
      <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-900 rounded-bl-lg">
        <div className="text-white">→</div>
      </div>
    </div>
  );
}

const CardGrado = ({id, title, code, label, src, onClick}) => {
  return(
    <div onClick={onClick} className="group cursor-pointer overflow-hidden shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg bg-gray-100">
      <span className="absolute top-50 z-0 h-24 w-24 rounded-full bg-primary transition-all duration-300 group-hover:scale-[12]"></span>
      <div className="relative mx-auto">
        <div className="relative">
          <img className="w-full h-full object-cover" src={src} alt="grado" />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </div>
        <div className="px-5 pb-5">
          <span className="relative grid h-24 w-24 -mt-14 p-2 border-primary border-8 place-items-center rounded-full bg-white transition-all duration-300 group-hover:bg-grisFondo">
            <img src="/src/assets/logo/logoOsha.png" alt="grado"/>
          </span>
          <div
            className="mt-3 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"
          >
            <h3 className="text-primary text-center font-bold text-lg md:text-xl transition-all duration-300 group-hover:text-white">
              {title}
            </h3>
            <div className="mt-3 flex flex-row items-center justify-center gap-3">
              <div className="flex flex-row items-center gap-1">
                <CiBarcode style={{color:"var(--azulMedio)", height:30, width:30}}/>
                <span> Código: {code}</span>
              </div>
              <div className="flex flex-row items-center gap-1">
                <FaCentercode style={{color:"var(--azulMedio)", height:25, width:25}}/>
                <span>{label}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button to={`/grados/${id}`} className="border-azulMedio border-2 p-2 rounded-lg text-azulMedio transition-all duration-300 group-hover:text-white group-hover:border-white"
            >
              Ver más &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const CardFotTex = ({ title, text, textColorClass, img}) => {
  return(
    <div className="overflow-hidden flex flex-col max-w-xl mx-auto">
      <img className="w-full rounded-2xl" src={img} alt="osha-institute"/>
      <div className={`relative -mt-28 px-10 pt-8 pb-8 bg-white m-10 rounded-xl shadow-xl`}>
        <h4 className={`${textColorClass} font-semibold text-lg inline-block ease-in-out inline-block mb-1`}>{title}</h4>
        <Line/>
        <p className="text-gray-500 text-sm mt-3">{text}</p>
      </div>
    </div>
  );
};



export {
  CardImgText,
  HoverEffectCard,
  GradientBorder,
  Section,
  SectionImgContent, 
  Card,
  Card3, 
  Form1,
  Categories, 
  GlowingGradientBorder, 
  CardFotTex,
  CardGrado
};