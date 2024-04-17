import { Route, Routes } from 'react-router-dom';
import Top from '../../components/Top';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Inicio from '../Web/Inicio';
import Nosotros from '../Web/Nosotros';
import Estandares from '../Web/Estandares';
import Acreditacion from '../Web/Acreditacion';
import Corporativos from '../Web/Corporativos';
import Grados from '../Web/Grados';



function Web() {
  return (
    <>
      <Top />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/our" element={<Nosotros/>} />
        <Route path="/standars" element={<Estandares/>} />
        <Route path="/acreditation" element={<Acreditacion/>} />
        <Route path='/corporativos' element={<Corporativos/>} />
        <Route path="/grade" element={<Grados/>} />
      </Routes>          
      <Footer/>
    </>
  )
}

function Template({ children }) {
  return (
    <div className='flex flex-col w-full h-full'>
      <Top />
      <Header />
      <main className=''>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Web;