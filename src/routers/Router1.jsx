import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import IngredientesPizza from '../pages/IngredientesPizza'
import Error404 from '../pages/Error404'

function Router1() {
  return (
    <>
      <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='404' element={<Error404/>}/>
        <Route path='ingredientesPizza/:id' element={<IngredientesPizza/>}/>
        <Route path="/" element={<Navigate to="home"/>}/>
        <Route path="*" element={<Navigate to="404"/>}/>
      </Routes>
    </>
  )
}

export default Router1
