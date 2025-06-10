import { useEffect, useState } from 'react'
import './App.css'

import React from 'react'
import Navbar from './components/Navbar'
import Users from './pages/Users'

const App = () => {
  let [data , setData] = useState(null)
  let [error , setError] = useState(null)
  let [loading , setLoading] = useState(false)

  let getData = async() => {
    setLoading(true);
    try{
      let res = await fetch('https://dummyjson.com/users');
      if(!res.ok){
        throw new Error("Bu yerda xato bor")
      }
      
      let data = await res.json()
      setData(data)
      console.log(data);
    } catch(error){
      setError(error)
      console.log(error);
    }finally{
      setLoading(false)
    }
      
  }
  
  useEffect(()=>{
    getData()
  }, [])
  return (
    <div className='bg-[#EFFAFA]'>
      <Navbar/>
      <Users/>
    </div>
  )
}

export default App