import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'
import Login from './pages/Aula/Login';
import Aula from './pages/Aula/Aula';
import Web from './pages/Web/Web';


function App() {

  return (
    <>
      <BrowserRouter>      
        <Routes>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/aulaosha/*' element={ <Aula/> }/>
          <Route path='/*' element={ <Web/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
