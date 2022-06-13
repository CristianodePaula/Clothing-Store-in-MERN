import React from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from "./components/Navbar/Navbar"
import AllCategories from './pages/AllCategories/AllCategories'
import Contact from './pages/Contact/Contact'
import User from './pages/User/User'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Success from './components/Sucess/Success'
import AllProducts from './components/AllProducts/AllProducts'
import UnitProduct from './components/ProductUnit/ProductUnit'
import ProductFiltered from './components/ProductFiltered/ProductFiltered'
import { useSelector } from "react-redux"

export default function App() {

  const user = useSelector((state) => state.user.currentUser)

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/all' element={<AllProducts />} />
            <Route path='/categories' element={<AllCategories />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/user' element={<User />} />
            <Route path="/products/:category" element={<ProductFiltered />} />
            <Route path='/product/:id' element={user ? <UnitProduct /> : <Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path="/login" element={user ? <Navigate to='/' /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to='/' /> : <Register />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
