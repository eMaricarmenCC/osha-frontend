import { Route, Routes } from 'react-router-dom';
import Top from '../../components/Top';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Inicio from '../Web/Inicio';
import { Nosotros, WhoWeAre, LegalNature, InternationalCooperation } from '../Web/Nosotros';
import Estandares from '../Web/Estandares';
import Acreditacion from '../Web/Acreditacion';
import Corporativos from '../Web/Corporativos';
import { Grados } from '../Web/Grados';
import Navbar from '../../components/Navbar/Navbar';
import Navbar2 from '../../components/Navbar/Navbar2';
import { Contactos } from './Contactos';


function Web() {
  return (
    <>
      {/* Header */}
      <header className="">
        <Top/>
        <Navbar/>

      </header>
      
      {/*<Top />*/}
      {/*<section
        className="h-screen bg-primary bg-cover
        font-[Poppins] md:bg-top bg-center"
      >
        <Navbar />
        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
          <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
            Items every woman should have
          </h1>
          <div className="text-xl">
            
          </div>
        </div>
      </section>*/}
      {/*<Top/>
      <Header />
      <Navbarr/>*/}
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/us" element={<Nosotros/>} />
        <Route path="/nosotros" element={<WhoWeAre/>} />
        <Route path="/nuestra-identidad" element={<LegalNature/>} />
        <Route path="/cooperacion-internacional" element={<InternationalCooperation/>} />
        <Route path="/declaracion-privacidad" element={<Nosotros/>} />
        <Route path="/estandares-osha" element={<Estandares/>} />
        <Route path="/standards" element={<Estandares/>} />
        <Route path="/accreditation" element={<Acreditacion/>} />
        <Route path="/degrees" element={<Grados/>} />
        <Route path='/corporate' element={<Corporativos/>} />
        <Route path='/contact' element={<Contactos/>} />
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