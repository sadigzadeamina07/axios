import React from 'react'
import { useEffect, useState } from 'react'
import './index.css'
import Header from './Components/Header'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
function App() {

  return (
    <div>
   <Header />
    <Cards />
    <Footer />
    </div>
  )
}

export default App