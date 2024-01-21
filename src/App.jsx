import { useState } from 'react'
// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Dashboard from './page/Dashboard'
import Product from './page/Product'
import ProductDetail from './page/ProductDetail'
import Cart from './page/Cart'
import OrderCompleted from './page/OrderCompleted'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={
        <div>
          <Dashboard/>
        </div>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/product-detail/:productId' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order-complete' element={<OrderCompleted />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
