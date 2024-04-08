import React from 'react';

function Login() {

  return (
    <div className='bg-gris h-screen flex flex-col justify-between'>
      
      { /* Header */}
      <div className='flex flex-row px-5 py-5 bg-white shadow-lg justify-between'>
        <img
          className="h-10 w-auto"
          src="/src/assets/logo/logoOsha.png"
          alt="Osha Institute"
        />
        <div>
          <button className='bg-primary rounded-lg text-white p-2'>Contactanos</button>
        </div>
      </div>

      { /* Formulario - imagen */}
      <div className='flex flex-col md:flex-row w-full gap-5 justify-center items-center py-10'>
        <div className='bg-white rounded-lg shadow-lg'>
          <div className="flex flex-col gap-5 min-h-full justify-center px-6 py-10 lg:px-8 w-500">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-primary text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Osha Institute
              </h2>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Usuario
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Contraseña
                    </label>                
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
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

              <p className="mt-5 text-center text-10 text-gray-500">
                No eres un miembro?{' '}
                <a href="#" className="font-semibold leading-6 text-primary hover:text-indigo-500">
                  Inscribete
                </a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="/src/assets/images/login.png" alt="person" className='w-65 h-40'/>
        </div>
      </div>

      {/* Footer logos */}
      <div>
      </div>      
    </div>
  )
}

export default Login;