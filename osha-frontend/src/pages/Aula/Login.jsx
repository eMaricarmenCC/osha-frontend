import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../../api/Login.api';
import { FaUser, FaPassport } from "react-icons/fa";


function Login() {

  /* Estado para controlar si el usuario está autentificado */
  const [loggedIn, setLoggedIn] = useState(false);

  /* Datos de email y contraseña*/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  /* EStado de los registros del formulario */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async data => {
    try {
      const res = await login(data.estema, data.estcon);
      console.log(res);
      setLoggedIn(true);
    } catch (error) {
      console.log('Error al conectarse al servidor')
      setLoggedIn(false);
    }
  });

  // Redirige a la págin '/dashboard' si el usuario está autentificado
  if (loggedIn) {
    return <Navigate to="/aulaosha" />
  }
  
  return (
    <div className='flex flex-col h-screen justify-between bg-grisFondo'>
      
      { /* Header */}
      <div className='flex flex-row px-5 py-5 bg-white shadow-lg justify-between'>
        <img
          className="h-10 w-auto"
          src="/src/assets/logo/logoOsha.png"
          alt="Osha Institute"
        />        
        <div className='flex flex-row gap-1'>
          <Link to="/" className="p-2 rounded-lg border border-primary">
            <span className="text-primary text-sm">Página web</span>
          </Link>
          <Link to="/contact" className="bg-primary rounded-lg text-white p-2">
            <span className="text-white text-sm">Contactanos</span>
          </Link>
        </div>
      </div>

      { /* Formulario - imagen */}
      <div className='flex flex-col md:flex-row justify-center items-center mt-10'>
        <div className="py-10 px-5 flex flex-col justify-center">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary to-azulClaro shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-2xl">
            </div>
            <div className="relative px-4 py-10 bg-white shadow-lg rounded-2xl sm:p-10">
              <div className="flex flex-col gap-4">
                <h2 className="text-primary text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Osha Institute
                </h2>
                <form className="space-y-6" action="#" method="POST" onSubmit={onSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-sm text-grisOscuro font-medium leading-6 text-gray-900">
                      Usuario
                    </label>
                    <div className="flex items-center mt-2">
                      <FaUser className="absolute ml-3" style={{width:20, height:20}}/>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder='Usuario'
                        required
                        className="w-full rounded-md border border-[#e0e0e0] bg-white pl-12 py-3 pr-4 text-base font-medium text-[#6B7280] outline-none focus:border-azulMedio focus:shadow-md"
                        {...register('estema', { required: true,})}
                      />
                      {errors.estema?.type === 'required' && <p className='text-red'>*El campo nombre es requerido</p>}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Contraseña
                      </label>                
                    </div>
                    <div className="flex items-center mt-2">
                      <FaUser className="absolute ml-3" style={{width:20, height:20}}/>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder='Contraseña'
                        required
                        className="w-full rounded-md border border-[#e0e0e0] bg-white pl-12 py-3 pr-4 text-base font-medium text-[#6B7280] outline-none focus:border-azulMedio focus:shadow-md"
                        {...register('estcon', { required: true,})}
                      />
                      {errors.estcon?.type === 'required' && <p className='text-red'>*El campo nombre es requerido</p>}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-azulMedio px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>  
          </div>
        </div>
        <div className='flex flex-col gap-15 justify-center items-center'>
          <span className='hidden sm:block'> <img className='item-center' src="/src/assets/logo/logoOsha.png" alt="Osha Institute" style={{width:200, height:80}}/> </span>
          <span className='hidden sm:block'> <img className='' src="/src/assets/images/login.png" alt="person" style={{width:450, height:300}}/> </span>
        </div>
      </div>

      {/* Footer logos */}
      <div className='flex p-2'>
        <img src="/src/assets/logo/logoAccreditedEducation.png" alt="Accredited Education" className='w-20'/>
      </div>      
    </div>
  )
}

export default Login;