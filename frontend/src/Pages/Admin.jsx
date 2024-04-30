import React from 'react'
import './Css/Admin.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import AdminNavbar from '../Components/AdminNavbar/AdminNavbar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../Components/AddProduct/AddProduct'
import ListProduct from '../Components/ListProduct/ListProduct'
const Admin = () => {
  return (
    <div className='admin'>
        <AdminNavbar />
        <Sidebar />
        
    </div>
  )
}

export default Admin
