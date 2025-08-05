import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './Pages/Login';
import Inicial from './Pages/Inicial';

function App() {


  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path='/inicio' element={<Inicial/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
