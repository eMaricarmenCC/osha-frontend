import { Routes, Route } from 'react-router-dom';
import SideBarMenu from '../../components/SideBarMenu';
import Dashboard from '../Aula/Dashboard';
import Programas from '../Aula/Programas';
import Examenes from '../Aula/Examenes';
import Notas from '../Aula/Notas';
import Certificados from '../Aula/Certificados';



function Aula() {
  return (
    <div className='flex flex-col'>
      <SideBarMenu>
        <Header />
        <Routes>
          <Route path='/' element={ <Dashboard/> } />
          <Route path='/programas' element={ <Programas/> } />
          <Route path='/examenes' element={ <Examenes/> } />
          <Route path='/notas' element={ <Notas/> } />
          <Route path='/certificados' element={ <Certificados/> } />
        </Routes>
      </SideBarMenu>
    </div>
  )
}

function Header() {
  return (
    <div className='w-full bg-grisFondo shadow-md px-5 py-5'>
      <div className='flex flex-row'>
        <img src="/src/assets/logo/logoOsha.png" alt="logo osha" className='w-50 h-10' />

      </div>
    </div>
  )
}

export default Aula