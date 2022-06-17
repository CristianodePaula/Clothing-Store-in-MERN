import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import {
  useSelector
} from "react-redux"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Users from './pages/Users/Users'
import Products from './pages/Products/Products'
import Orders from './pages/Orders/Orders'
import Messages from './pages/Messages/Messages'
import Product from './components/Product/Product'

function App() {

  const admin = useSelector((state) => state.user.currentUser.isAdmin)

  return ( 
    <BrowserRouter>
      <Routes>
        <Route path = "/login" element={admin ? < Navigate to = '/' /> : <Login/>}/> 
      {admin && ( 
        <>
          <Route path = "/" element = {<Home />}/>        
          <Route path = "/users" element = {<Users />}/>    
          <Route path = "/products" element = {<Products />}/>  
          <Route path = "/product/:productId" element = {< Product />}/>   
          <Route path="/requests" element = {<Orders />}/> 
          <Route path = "/message" element={< Messages />}/>    
        </>
      )} 
      </Routes>  
    </BrowserRouter>
  )
}

export default App