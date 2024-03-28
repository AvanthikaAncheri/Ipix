import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Get from './Get'
import Detailed from './Detailed'
import Header from './Header'
import Categorie from './Categorie'
import EachCategory from './EachCategory'
import Users from './Users'


const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path="/" element={<Get/>}></Route>
    <Route path="/products" element={<Get/>}></Route>
    <Route path="/detailedProduct" element={<Detailed/>}></Route>
    <Route path="/categories" element={<Categorie/>}></Route>
    <Route path="/each" element={<EachCategory/>}></Route>
    <Route path="/users" element={<Users/>}></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default Router