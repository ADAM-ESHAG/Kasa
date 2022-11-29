import { useState } from 'react'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import data from '../data'


function App() {
  const myData = data.map(item => {
    return (
      <MainContent 
          key={item.id}
          item={item}
      />
    )
  })
  return (
    <div className='container'>
      <Navbar />
      <main className="mainContent">
        {myData}
      </main>
      <Footer />
    </div>
  )
}

export default App
