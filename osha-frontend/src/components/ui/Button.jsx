import React from 'react';
import { Link } from "react-router-dom";


const buttonPrimary = ({text, link}) => {
  return (
    <button className="mt-5">
      <Link to={link} className="flex p-5 rounded-lg py-3 px-5 text-white font-semibold bg-gradient-to-b from-azulMedio to-primary hover:bg-azulOscuro transform transition-transform hover:scale-110 text-white">
        {text}
      </Link>
    </button>
  );
};

function imput() {
  return (
    <div className="bg-white py-4 rounded-lg">
      <div className="relative bg-inherit">
        <input type="text" id="username" name="username" className="peer bg-transparent h-10 w-72 rounded-sm text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" placeholder="Type inside me"/>
          <label for="username" className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all">
            Usuario
          </label>
      </div>
    </div>
  )
}

const ButtonEmailInfo = () => {
  return (
    <div className="mt-10 p-5 rounded-lg bg-sky-800 text-center shadow-lg">
      <a href="mailto:info@osha.es" className="text-[14px]">
        <span className="text-white ">Para más información, escribenos a: info@osha.es</span>
      </a>
    </div>
  );
};

const ButtonEmailAccreditation = () => {
  return (
    <div className="mt-10 p-5 rounded-lg bg-green-700 text-center shadow-lg">
      <a href="mailto:info@osha.es" className="text-[14px]">
        <span className="text-white">Para más información, escribenos a: acreditacion@osha.es</span>
      </a>
    </div>
  );
};

const ButtonContacto = () => {
  return (
    <div className="mt-8">
      <Link to="/contactanos" className="text-[16px] py-2 px-4 min-w-[150px] text-center text-white bg-sky-600 border border-sky-600 rounded-md active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring">Contáctanos</Link>
    </div>
  );
};

export { buttonPrimary, ButtonEmailInfo, ButtonContacto, ButtonEmailAccreditation }