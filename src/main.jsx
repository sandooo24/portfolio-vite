import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contacto from './components/Contacto'
import Proyectos from './components/Proyectos'
import Inicio from './components/Inicio'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}>Inicio</Route>
      <Route path='/proyectos' element={<Proyectos/>}>Proyectos</Route>
      <Route path='/contacto' element={<Contacto/>}>Contacto</Route>
    </Routes>
  </BrowserRouter>
)
