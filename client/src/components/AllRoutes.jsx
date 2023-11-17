import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import { Signin } from '../pages/Signin'
// import Product from './products/product'
import SignUp from "../pages/Signup"
import { SingleDetailPage } from '../pages/SingleDetailPage'
import { ProductSide } from '../pages/ProductSide'
import { PageNotFound } from '../pages/PageNotFound'
import Cart from '../pages/Cart'
import { PrivateRoute } from './PrivateRoute'
import Checkout from '../pages/Checkout'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<Signin/>}/>

        {/* <Route path='/product' element ={<Product/>} /> */}
        <Route path='/productSide' element ={<PrivateRoute><ProductSide/></PrivateRoute>} />

       <Route path='/cart' element={<Cart/>} />
       <Route path='/detail/:courseId' element={<PrivateRoute><SingleDetailPage/></PrivateRoute>} />
       <Route path='/payment' element={<Checkout/>} />
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}

export default AllRoutes
