import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


/* BREADCRUMBS CABECERA DE CADA SECCIÓN */
const Breadcrumbs = ({text, icon, img}) => {
  return(
    <div className="relative w-full" style={{height:150}}>
      <img src={img} alt="Background Image" className="object-cover object-center w-full h-full" />
      <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Contenido */}
      <div className="absolute inset-0 flex flex-col md:flex-row gap-4 items-center justify-between
        px-5 md:px-10 lg:px-20 xl:px-40 py-8 lg:py-15 lg:py-20 w-full">
        <div className="flex flex-row gap-5 items-center text-white text-3xl">
          <span>{icon}</span>
          <h2 className="text-lg lg:text-2xl font-bold">{text}</h2>
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
              <Link to="#" className="hover:text-azulClaro text-azulClaro transform transition-transform hover:scale-110">{text}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

function Breadcrumb({ items, backgroundColor, color }) {
  return(
    <nav style={{ backgroundColor: backgroundColor }}>
      <ul className="flex p-4">
        <li className=''>
          <a href="#" className="text-gray-600 hover:text-blue-500">
            <FaHome/>
          </a>
        </li>
        {items.map((item, index) => (
          <li key={index} className="mr-2">
            <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
            {index !== items.length - 1 ? (
              <a href={item.url} className="text-gray-600" style={{ color: color }}>
                {item.text}
              </a>
            ) : (
              <span className="text-gray-800" style={{ color: color }}>
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

function BreadcrumbModelo() {
  return(
    <>
    <div className="bg-gray-100 rounded-lg p-3 flex items-center flex-wrap">
      <ul className="flex items-center">
      <li className="inline-flex items-center">
        <a href="#" className="text-gray-600 hover:text-blue-500">
        <svg className="w-5 h-auto fill-current mx-2 text-gray-400" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>
        </a>

        <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
      </li>

      <li className="inline-flex items-center">
        <a href="#" className="text-gray-600 hover:text-blue-500">
        Page 1
        </a>

        <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
      </li>

      <li className="inline-flex items-center">
        <a href="#" className="text-gray-600 hover:text-blue-500">
        Page 2
        </a>

        <span className="mx-4 h-auto text-gray-400 font-medium">/</span>
      </li>

      <li className="inline-flex items-center">
        <a href="#" className="text-gray-600 hover:text-blue-500 text-blue-500">
        Page 3
        </a>
      </li>
      </ul>
    </div>
    </>
  )
}

export { Breadcrumb, Breadcrumbs};