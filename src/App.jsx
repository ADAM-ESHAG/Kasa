import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About';
import Logement from '../components/Logement';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exct path='/' element={<Home />}></Route>
          <Route exct path='/About' element={<About />}></Route>
          <Route exct path='/Logement/About' element={<About />}></Route>
          <Route exct path='/Logement' element={<Logement />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
