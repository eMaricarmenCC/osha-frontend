import { Route, Routes } from 'react-router-dom';
import Top from '../../components/Top';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer';

import Inicio from '../Web/Inicio';
import { WhoWeAre, LegalNature, InternationalCooperation, PrivacyAndSecurityDeclaration } from '../Web/Nosotros';
import Estandares from '../Web/Estandares';
import { GradoDetalle, Grados } from '../Web/Grados';
import { Certex } from '../Web/Certex';
import { Cursos, CursosGratuitos } from '../Web/Cursos';
import { Membresia } from '../Web/Membresia';
import { Acreditacion, AcreditacionAE} from '../Web/Acreditacion';
import { Corporativos } from '../Web/Corporativos';
import { Sedes } from '../Web/Sedes';
import { Contactos } from './Contactos';
import { Cumplimiento } from './Cumplimiento';
import { Conducta } from './Conducta';
import { ConoceOsha } from './ConoceOsha';
import { Calidad } from './Calidad';
import { Credenciales } from './Credenciales';
import { PoliticaPago } from './PoliticaPago';
import { FundacionOsha } from './FundacionOsha';
import { Transparencia } from './Transparencia';
import { RepresentanteLondres, RepresentantePakistan } from './Representantes';


function Web() {
  return (
    <>
      {/* Header */}
      <header className="">
        <Top/>
        <Navbar/>
      </header>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/nosotros" element={<WhoWeAre/>} />
        <Route path="/nuestra-identidad" element={<LegalNature/>} />
        <Route path="/cooperacion-internacional" element={<InternationalCooperation/>} />
        <Route path="/declaracion-privacidad" element={<PrivacyAndSecurityDeclaration/>} />
        <Route path="/estandares-osha" element={<Estandares/>} />
        <Route path="/acreditaCion" element={<Acreditacion/>} />
        <Route path="/acreditaCion-ae" element={<AcreditacionAE/>} />
        <Route path="/grados" element={<Grados/>} />
        <Route path="/grados/:id" element={<GradoDetalle/>} />
        <Route path="/certex" element={<Certex/>} />
        <Route path="/cursos" element={<Cursos/>} />
        <Route path="/cursos-gratuitos" element={<CursosGratuitos/>} />
        <Route path="/membresia" element={<Membresia/>} />
        <Route path='/corporativos' element={<Corporativos/>} />
        <Route path='/sedes' element={<Sedes/>} />
        <Route path='/contactanos' element={<Contactos/>} />
        <Route path='/cumplimiento' element={<Cumplimiento/>} />
        <Route path='/codigo-conducta' element={<Conducta/>} />
        <Route path='/conoce-osha' element={<ConoceOsha/>} />
        <Route path='/calidad-educativa' element={<Calidad/>} />
        <Route path='/credenciales' element={<Credenciales/>} />
        <Route path='/politica-pago' element={<PoliticaPago/>} />
        <Route path='/fundacion-osha' element={<FundacionOsha/>} />
        <Route path='/transparencia' element={<Transparencia/>} />
        <Route path='/representante-pakistan' element={<RepresentantePakistan/>} />
        <Route path='/representante-londres' element={<RepresentanteLondres/>} />
      </Routes>
      <Footer/>
    </>
  )
}

const Headerr = () => {
  return(
    <header>
      <Top/>
      <Navbar />
    </header>
  );
};

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