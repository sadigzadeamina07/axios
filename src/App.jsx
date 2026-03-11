import React from 'react'
import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import Header from './Components/Header'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
function App() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
   axios.get('https://6980a5df6570ee87d50fee52.mockapi.io/keto')
   .then(response=>{
    setLoading(false)
   })
   .catch(
    error=>{
      setLoading(false)
    }
   )
  },[])
  if(loading) return 
  <div className="flex justify-center items-center"><div className="w-16 h-16 m-auto border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div></div>
  
  return (
    <div>
   <Header />
    <Cards />
    <Footer />
    </div>
  )
}

export default App