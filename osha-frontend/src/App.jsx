import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import Login from './pages/Aula/Login';
import Aula from './pages/Aula/Aula';
import Web from './pages/Web/Web';


function App() {

  return (
    <Suspense fallback="Cargando">
      <BrowserRouter>      
        <Routes>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/aulaosha/*' element={ <Aula/> }/>
          <Route path='/*' element={ <Web/> } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
