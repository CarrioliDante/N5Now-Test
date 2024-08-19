import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import Cart from './components/Cart/Cart'
import '../src/styles/main.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
