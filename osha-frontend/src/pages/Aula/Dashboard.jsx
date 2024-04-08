import { Routes, Route } from 'react-router-dom';
import SideBarMenu from '../../components/SideBarMenu';
import Programas from '../Aula/Programas';
import Certificados from '../Aula/Certificados';



function Dashboard() {
  return (
    <>
      <SideBarMenu>
        <Routes>
          <Route path='/aulaosha/programas' element={ <Programas/> } />
          <Route path='/aulaosha/cerificados' element={ <Certificados/> } />
        </Routes>
      </SideBarMenu>
    </>
  )
}
export default Dashboard