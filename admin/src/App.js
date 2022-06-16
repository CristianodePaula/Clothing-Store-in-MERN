import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { useSelector } from "react-redux"
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import UsersList from './components/UsersList/UsersList'
import Products from './components/Products/Products'
import Requests from './components/Requests/Requests'
import Message from './components/Message/Message'

function App() {

  const admin = useSelector((state) => state.user.currentUser.isAdmin) 

  return ( 
    <BrowserRouter >
      <Routes >
        <Route path="/login" element={admin ? <Navigate to='/' /> : <Login />} />
        {admin && (
        <>
        <Route path="/" element={<Home/>}/>       
        <Route path="/users" element={<UsersList/>}/>   
        <Route path="/products" element={<Products/>}/>   
        <Route path="/requests" element={<Requests/>}/>
        <Route path="/message" element={<Message/>}/>   
        </>
        )}
      </Routes> 
    </BrowserRouter>
  )
}

export default App




/*
import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import User from './components/User/User'

function App() {

  const admin = true

  return ( 
    <BrowserRouter >
      <Routes >
        {admin ? 
        <> 
          <Route path="/" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newuser" element={<NewUser/>}/>
          <Route path="/products" element={<ProductList/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/newproduct" element={<NewProduct/>}/>
        </>
        :
        <>
          <Route path="/" element={<Login/>}/>
        </>
        }

    </Routes> 
    </BrowserRouter>
  )
}
export default App
*/
