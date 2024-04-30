import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../Assets/Product_Cart.svg'
import list_product_icon from '../Assets/Product_list_icon.svg'
import user_icon from '../Assets/user_icon.png';
import employee_icon from '../Assets/emp_icon.png';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/admin-addproduct'} style={{textDecoration:"none"}}>
        <div className="sidebaritem">
            <img src={add_product_icon} alt="" />
            <p>Add Product</p>
        </div>
        </Link>
        <Link to={'/admin-listproduct'} style={{textDecoration:"none"}}>
        <div className="sidebaritem">
            <img src={list_product_icon} alt="" />
            <p>Product List</p>
        </div>
        </Link>

        <Link to={'/admin-listusers'} style={{textDecoration:"none"}}>
        <div className="sidebaritem">
            <img src={user_icon} alt="" />
            <p>User List</p>
        </div>
        </Link>
        <Link to={'/admin-listemployees'} style={{textDecoration:"none"}}>
        <div className="sidebaritem">
            <img src={employee_icon} alt="" />
            <p>Employee List</p>
        </div>
        </Link>
    </div>
  )
}

export default Sidebar
