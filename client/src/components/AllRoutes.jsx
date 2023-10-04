import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { Signin } from '../pages/Signin'
import Product from './products/product'
import SignUp from "../pages/Signup"
import { SingleDetailPage } from '../pages/SingleDetailPage'
import { ProductSide } from '../pages/ProductSide'
import { PageNotFound } from '../pages/PageNotFound'



const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>

        {/* <Route path='/product' element ={<Product/>} /> */}
        <Route path='/productSide' element ={<ProductSide/>} />

       <Route path='/detail/:courseId' element={<SingleDetailPage/>} />

        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default AllRoutes
