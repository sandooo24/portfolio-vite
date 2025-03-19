import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Home, AboutMe, Projects, Contact } from './pages';
import { TransitionPage } from './components/AnimateBackground';
import { Header } from './components/Header';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <AnimateRoutes/>
    </BrowserRouter>
  )
}

const AnimateRoutes = () =>{
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<TransitionPage><Home/></TransitionPage>} />
        <Route path='/aboutme' element={<TransitionPage><AboutMe/></TransitionPage>} />
        <Route path='/projects' element={<TransitionPage><Projects/></TransitionPage>} /> 
        <Route path='/contact' element={<TransitionPage><Contact/></TransitionPage>} />
      </Routes>
    </AnimatePresence>
  );
}