import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/homePage';

import './App.css'
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>  
            <Route path='/product' element={<ProductPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/admin/*' element={<AdminPage/>}/>
        </Routes>  
        <Footer/>
      </Router>  
    </>
  )
}

export default App
