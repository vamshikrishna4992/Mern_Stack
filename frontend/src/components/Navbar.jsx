import React from "react";
import '../style/Navbar.css'
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import logo3 from '../assets/logo3.png'

const Navbar = ()=>{
    return (
        <>     
        <nav className="navbar">
            <div className="navbar-brand">
            <div className="logo-container">
            <img src={logo3} alt="Logos" className="logo" /> {/* Replace with your logo */}
          </div>
                <h2>My E-Commerce</h2>
            </div>
            <div className="navbar-links">
              
                <ul>
                <div className="search-container">
                 <input type="text" placeholder="Search products..." className="search-bar" />
                </div>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <Link to='https://tse3.mm.bing.net/th?id=OIP.m1b0lTXaFOSihsFcHQhAZAHaFp&pid=Api&P=0&h=180' className="cart-link">
                      <FaShoppingCart className="cart-icon" /> 
                    </Link>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;