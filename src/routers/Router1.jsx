import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../paginas/Home'
import IngredientesPizza from '../paginas/IngredientesPizza'

function Router1() {
  return (
    <>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='ingredientesPizza' element={<IngredientesPizza/>}/>
        <Route path="/" element={<Navigate to="home"/>} />
      </Routes>
    </>
  )
}

export default Router1
