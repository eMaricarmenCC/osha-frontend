import { Component, useState } from 'react'
import { BrowserRouter, Router, Navigate, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Top from './components/Top';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Login from './pages/Aula/Login';
import Nosotros from './pages/Web/Nosotros/Nosotros';
import Estandares from './pages/Web/Estandares/Estandares';
import Acreditacion from './pages/Web/Acreditacion/Acreditacion';
import Grados from './pages/Web/Grados/Grados';
import Aula from './pages/Aula/Aula';



function App() {

  return (
    <>
      <BrowserRouter>      
        <Routes>
          <Route path='/aulaosha/login' element={ <Login/> }/>
          <Route path='/aulaosha/*' element={ <Aula/> }/>
          <Route path='/*' element={
            <div>
              <Top />
              <Header />
              <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/nosotros" element={<Nosotros/>} />
                <Route path="/estandares" element={<Estandares/>} />
                <Route path="/acreditacion" element={<Acreditacion/>} />
                <Route path="/grados" element={<Grados/>} />
              </Routes>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
