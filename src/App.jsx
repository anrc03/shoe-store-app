import { useEffect, useState } from 'react'
// import './App.css'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from './page/Login'
import Dashboard from './page/Dashboard'
import Product from './page/Product'
import ProductDetail from './page/ProductDetail'
import Cart from './page/Cart'
import RegisterAdmin from './page/RegisterAdmin'
import RegisterCustomer from './page/RegisterCustomer'
import HomeAdmin from './page/HomeAdmin'
import CreateProduct from './page/CreateProduct'
import Store from './page/Store'
import CreateStore from './page/CreateStore'

function App() {

  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")

  const location = useLocation()
  const navigate = useNavigate();
  console.log(location)

  useEffect(() => {
    if(token && location.pathname === "/login") {
      navigate("/")
    }  
  }, [])

  return (
    <div>
      <Routes>
        <Route index element={
        <div>
          <Dashboard/>
        </div>}/>

        {token ?
          role === "ROLE_ADMIN" ? 
          <>
            <Route path='/home' element={<Dashboard/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/product-detail/:productId' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/home/admin' element={<HomeAdmin/>}/>
            <Route path='/create/product' element={<CreateProduct/>}/>
            <Route path='/create/store' element={<CreateStore/>}/>
            <Route path='/stores' element={<Store/>}/>
          </>
          :
          <>
            <Route path='/home' element={<Dashboard/>}/>
            <Route path='/products' element={<Product/>}/>
            <Route path='/product-detail/:productId' element={<ProductDetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </> 
        : 
        <>
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/product-detail/:productId' element={<ProductDetail/>}/>
          <Route path='/register/admin' element={<RegisterAdmin/>}/>
          <Route path='/register' element={<RegisterCustomer/>}/>
        </>}
      </Routes>
    </div>
  )
}

export default App
