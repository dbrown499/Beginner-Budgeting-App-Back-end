import React from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import New from './pages/New'
import Index from './pages/Index'
import Show from './pages/Show'
import Edit from './pages/Edit'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to="/transaction" replace />}/>
        <Route path='/transaction' element={<Index />}/>
        <Route path='/transaction/new' element={<New />}/>
        <Route path='/transaction/:id' element={<Show />}/>
        <Route path='/transaction/:id/edit' element={<Edit />}/>
      </Routes>
    </>
  )
}

export default App
