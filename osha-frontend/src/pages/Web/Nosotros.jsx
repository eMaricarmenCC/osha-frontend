import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";


function Nosotros(){
  return (
    <>
    {/* Breadcrumbs */}
    <div className="relative w-full" style={{height:100}}>
      <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" class="object-cover object-center w-full h-full" />
      <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-row px-5 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <FaBuildingColumns color="white" style={{height:20, width:20}} />
          <h1 className="text-2xl text-white font-bold">Nosotros</h1>
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
              <Link to="#" className="text-gray-600 hover:text-azulClaro text-azulClaro transform transition-transform hover:scale-110">Nosotros</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <section className="px-10">
      <p className='text-black' >Nosotros en construccion</p>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </section>
    </>
  )   
}
export default Nosotros