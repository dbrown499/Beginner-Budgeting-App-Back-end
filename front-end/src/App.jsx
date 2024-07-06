import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Index from './pages/Index'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/transaction" replace />}/>
        <Route path='/transaction' element={<Index />}/>

      </Routes>
    </>
  )
}

export default App
