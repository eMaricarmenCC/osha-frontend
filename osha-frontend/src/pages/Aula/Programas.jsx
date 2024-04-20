import { PiNotebook } from 'react-icons/pi';


function Programas() {
  return (
    <div className="px-10 py-10 w-full h-full">
      <div className="flex flex-col gap-5">
        <h3 className='text-primary text-lg'>Programas Matriculados</h3>
        <CardPrograma/>
        <CardPrograma/>
      </div>
    </div>
  )
}

function CardPrograma() {
  return (
    <div className="flex flex-col gap-1 w-auto h-auto">
      <div className="flex rounded-r-lg bg-white shadow-lg">
        {/* Imagen */}
        <div className=" p-3 flex flex-col gap-1 rounded-r-lg bg-azulClaro items-center">
          <PiNotebook color='white' style={{width:25, height:25}}/>
          <h4 className='text-white'>Programa</h4>
        </div>
        {/* Contenido */}
        <div className='p-3 flex-1'>
          <p className='text-grisOscuro text-lg'> Desarrollo nombre del programa</p>
          <p className='text-primary'> Código </p>
        </div>
        {/* Opciones */}
        <div className='flex flex-col gap-1 p-2'>
          <button className='p-2 bg-azulMedio rounded-lg text-sm text-white text-xs'>Ir al programa</button>
          <button className='p-2 bg-green rounded-lg text-sm text-white text-xs'>Ver notas</button>
        </div>
      </div>
    </div>

  )
}

function CardCurso(){
  return (
    <div className="flex flex-col gap-1 w-auto h-auto">
      
      {/* Card curso */}
      <div className="flex rounded-r-lg bg-white shadow-lg">
        <div className=" p-3 flex flex-col gap-1 rounded-r-lg bg-azulClaro items-center">
          <PiNotebook color='white' style={{width:25, height:25}}/>
          <h4 className='text-white'>Programa</h4>
        </div>
        <div className='p-3'>
          <p className='text-grisOscuro'> Desarollo nombre del curso</p>
        </div>
      </div>

      {/* Nota */}
      <div className='flex bg'>
        <p>Nota</p>
        <p>0</p>
      </div>

      {/* Opciones */}
      <div className='flex gap-2'>
        <button className='border-1 text-sm'>Ir al curso</button>
        <button className='text-sm'>Dar examen</button>
      </div>

    </div>

  )
}

export default Programas