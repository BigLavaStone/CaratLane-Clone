import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login.jsx';
import AllProducts from '../Pages/AllProducts.jsx'


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />;
        <Route path='/Jewellery' element={<AllProducts />} />;
        <Route path='/Jewellery/:type' element={<AllProducts />} />;
        <Route path='/Signup' element={<Signup />} />;
        <Route path='/Login' element={<Login />} />;
    </Routes>
  )
}

export default AllRoutes;
