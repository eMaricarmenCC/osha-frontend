import { Component, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Top from './components/Top'
import Header from './components/Header'
import Inicio from './pages/Inicio'


function App() {

  return (
    <>
      <BrowserRouter>
        <div className='app'>
          <Top />
          <Header />
          <Inicio />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
