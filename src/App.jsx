import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About';
import Logement from '../components/Logement';
import Error from '../components/Error'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exct path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='Logement/:id' element={<Logement />}></Route>
          <Route path='/Logement/About' element={<About />}></Route>
          <Route path='*' element={<Error />}></Route>  
        </Routes>
      </Router>
    </>
  )
}

export default App
