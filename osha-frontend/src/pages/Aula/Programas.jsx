import { PiNotebook } from 'react-icons/pi';
import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Tab, SimpleTab, TabSections } from '../../components/ui/Tab';
import { Introduccion, Objetivos, Modulo1, Modulo2, Examen} from './Cursos/800';
import { Cursos } from './Cursos';
import { TableCourse } from '../../components/TableCourse/TableCourse';

function Programas() {

  const breadcrumbItems = [
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
        <h3 className='text-primary text-lg'>Programas Matriculados</h3>
        <CardPrograma/>
        <CardPrograma/>
        <Cursos/>
        <Curso/>
        <EjemploTableCourse/>
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
        <div></div>
        {/* Código */}
        <div className=" p-3 flex flex-col gap-1 rounded-r-lg bg-azulClaro items-center">
          <PiNotebook color='white' style={{width:25, height:25}}/>
          <h4 className='text-white'>Programa</h4>
        </div>
        {/* Contenido */}
        <div className='p-3 flex-1'>
          <p className='text-grisOscuro text-lg'> Desarrollo nombre del programa</p>
          <p>Número de horas: 150</p>
          <p>Número de módulos: 5</p>
          <p className='text-primary'> Código </p>
          <p></p>
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

function Curso() {

  const [componenteActual, setComponenteActual] = useState(null);

  const handleClick = (componente) => {
    setComponenteActual(componente);
  };

  const breadcrumbItems = [
    { text: 'Programas', url: '/aulaosha/programas', active: true },
    { text: 'Curso 105', url: '/aulaosha/programas', active: true },
  ];

  return(
    <div>
      <div className='flex justify-between'>
        <h1 className=''>105 Nombre del curso</h1>
        <Breadcrumb
          items={breadcrumbItems}
          backgroundColor="#f0f0f0"
          color="black"
        />
      </div>
      <div className="flex mt-5">
        <div className="w-1/4">
          <div className="relative z-10 h-auto p-4 bg-white border-radius rounded-lg shadow-lg">
            <ul
              className="mx-auto max-w-xs text-left font-medium text-lg leading-none border-primary divide-y divide-primary">
              <li>
                <a className="py-3.5 w-full flex items-center text-azulMedio hover:text-primary hover:bg-blue-50" href="#"
                  onClick={() => handleClick(Introduccion)}
                >
                    <span className="ml-5 mr-2.5 w-1 h-7 bg-azulMedio rounded-r-md"></span>
                    Introducción
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-azulMedio hover:text-primary hover:bg-blue-50" href="#"
                  onClick={() => handleClick(Objetivos)}
                >
                    <span className="ml-5 mr-2.5 w-1 h-7 bg-azulMedio rounded-r-md"></span>
                    Objetivos del curso
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-azulMedio hover:text-primary hover:bg-blue-50" href="#"
                    onClick={() => handleClick(<TabSections activeKey={0} sections={Modulo1} />)}
                >
                    <span className="ml-5 mr-2.5 w-1 h-7 bg-azulMedio rounded-r-md"></span>
                    <div className='flex flex-col '>
                      Módulo 1:
                      <p className='font-normal text-gray-500 text-sm'>Nombre del módulo nombre</p>
                    </div>
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-azulMedio hover:text-primary hover:bg-blue-50" href="#"
                    onClick={() => handleClick(<TabSections activeKey={0} sections={Modulo2} />)}
                >
                    <span className="ml-5 mr-2.5 w-1 h-7 bg-azulMedio rounded-r-md"></span>
                    <div className='flex flex-col '>
                      Módulo 2:
                      <p className='font-normal text-gray-500 text-sm'>Nombre del módulo nombre</p>
                    </div>
                </a>
              </li>
              <li>
                <a className="py-3.5 w-full flex items-center text-azulMedio hover:text-primary hover:bg-blue-50" href="#"
                    onClick={() => handleClick(Examen)}
                >
                    <span className="ml-5 mr-2.5 w-1 h-7 bg-azulMedio rounded-r-md"></span>
                    Examen final
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 pl-4">
          {/* EL contenido va cambiando */}
          {componenteActual}
        </div>
      </div>
    </div>
  )
}

function EjemploTableCourse(){
  // Definición de las columnas de la tabla
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Nombre',
        accessor: 'nombre',
      },
      {
        Header: 'Descripción',
        accessor: 'descripcion',
      },
    ],
    []
  );

  // Datos para la tabla
  const data = React.useMemo(
    () => [
      {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción del producto 1',
      },
      {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripción del producto 2',
      },
      // Agrega más datos según sea necesario
    ],
    []
  );

  return (
    <div className="App">
      <h1>Tabla de productos</h1>
      <TableCourse nombreID="id" columns={columns} data={data} nombre="Productos" />
    </div>
  );
}

function EjemploSimpleTab() {
  const tabs = [
    {aKey: "react", title: "Sección 1", content: "REact makes it painless to create"},
    {aKey: "nodejs", title: "Sección 2", content: "NOde.js is an open-source"},
    {aKey: "mongodb", title: "Sección 3", content: "MOngo DB is a non-.relatiol doument"}
  ]
  return(
    <SimpleTab activeKey="react">
      {tabs.map(item => <Tab key={item.aKey} akey={item.aKey} title={item.title}>{item.content}</Tab>)}
    </SimpleTab>
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