import { useEffect, useState } from 'react'
import './App.css'

import React from 'react'
import Navbar from './components/Navbar'
import Users from './pages/Users'

const App = () => {
  
  return (
    <div className='bg-[#EFFAFA]'>
      <Navbar/>
      <Users/>
    </div>
  )
}

export default App