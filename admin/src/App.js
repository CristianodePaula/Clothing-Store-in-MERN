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
import EditProduct from './pages/EditProduct/EditProduct'
import NewProduct from './pages/NewProduct/NewProduct'
import NewUser from './pages/NewUser/NewUser'
import Statistics from './pages/Statistics/Statistics'


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
          <Route path = "/product/:productId" element = {< EditProduct />}/>  
          <Route path="/newproduct" element = {<NewProduct />}/>
          <Route path="/newuser" element = {<NewUser />}/>  
          <Route path="/requests" element = {<Orders />}/> 
          <Route path ="/statistics" element={< Statistics />}/>
          <Route path = "/message" element={< Messages />}/>    
        </>
      )} 
      </Routes>  
    </BrowserRouter>
  )
}

export default App