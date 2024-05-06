import { PiNotebook } from 'react-icons/pi';
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Tab } from '../../components/ui/Tab';

function Programas() {

  const breadcrumbItems = [
    { text: 'Home', url: '/aulaosha' },
    { text: 'Programas', url: '/aulaosha/programas', active: true },
  ];

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    function updateScrollPercent() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const winHeight = window.innerHeight || document.documentElement.clientHeight;
      const docHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      const newScrollPercent = (scrollY / (docHeight - winHeight)) * 100;
      setScrollPercent(newScrollPercent);
    }

    window.addEventListener("scroll", updateScrollPercent);
    return () => {
      window.removeEventListener("scroll", updateScrollPercent);
    };
  }, []);

  return (
    <>
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-300">
      <div className="h-full bg-secondary" id="readingProgress" style={{ width: `${scrollPercent}%` }}></div>
    </div>
    <div className="px-10 py-10 w-full h-full">
      <div className="flex flex-col gap-5">
        <Breadcrumb
          items={breadcrumbItems}
          backgroundColor="#f0f0f0"
          color="black"
        />
        <Tab/>
        <h3 className='text-primary text-lg'>Programas Matriculados</h3>
        <CardPrograma/>
        <CardPrograma/>
      </div>
    </div>
    </>    
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

function Content() {
    return (
        <div className="col-lg-12">
            <div id="content" className="col-lg-12">
                <ul id="tabs" className="nav nav-tabs" data-tabs="tabs">
                    <li className="active"><a href="#mod1" data-toggle="tab">1.1</a></li>
                    <li><a href="#mod2" data-toggle="tab">1.2</a></li>
                    <li><a href="#mod3" data-toggle="tab">1.3</a></li>
                </ul>

                <div id="my-tab-content" className="tab-content">

                    <div className="tab-pane active" id="mod1">
                        <h1>Modulo lll: Fluidos</h1>
                        <h3>Lubricantes</h3>
                        <p>Los fluidos Caterpillar han sido aprobados y desarrollados por CAT para optimizar el rendimiento y la vida útil de los motores y las máquinas Caterpillar. La calidad del aceite final depende de la calidad del componente de base, de la calidad de los aditivos y de la compatibilidad entre el componente de base y los aditivos. Los fluidos CAT están hechos con una fórmula de componentes de base de aceite refinado de alta calidad y aditivos de alta calidad química y cantidad óptima para proporcionar un alto rendimiento en los motores y los componentes de la máquina, los fluidos CAT se usan para el llenado en fabrica de los motores y los componentes CAT.</p>
                        <br />
                        <button className="btn btn-primary btnNext">Siguiente</button>
                    </div>

                    <div className="tab-pane" id="mod2">
                        <h1>Modulo 2</h1>
                        <br />
                        <button className="btn btn-primary btnNext">Siguiente</button>
                    </div>

                    <div className="tab-pane" id="mod3">
                        <h1>Modulo 3</h1>
                        <br />
                        <button className="btn btn-primary btnNext">Siguiente</button>
                    </div>

                </div>
            </div>
        </div>
    );
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