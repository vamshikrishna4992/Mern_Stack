import React from "react";
import { Link } from "react-router-dom";
import './AdminNavba.css'
const AdminNavbar = ()=>{
    return (
        <>
            <nav className="admin-navbar">
                <ul>
                    <li><Link to="/admin/products" >Product Management</Link></li>
                    <li><Link to="/admin/users" >User Management</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default AdminNavbar;