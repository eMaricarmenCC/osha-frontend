import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { Suspense } from 'react';
import Web from './pages/Web/Web';


function App() {

  return (
    <Suspense fallback="Cargando">
      <BrowserRouter>      
        <Routes>
          <Route path='/*' element={ <Web/> } />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App;
