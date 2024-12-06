import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import UserTable from "../components/UserTable";
import ProductTable from "../components/ProdctTable";

const AdminPage = ()=>{
    return (
        <div>
            <AdminNavbar/>
            <Routes>
                <Route path="products" element={<ProductTable/>}/>
                <Route path="users" element={<UserTable/>}/>
            </Routes>
        </div>
    )
}
export default AdminPage;