import React from 'react'
import {  Routes, Route, useLocation } from 'react-router-dom';
import Shop from './Shop';
import ShopCategory from './ShopCategory';
import Product from './Product';
import Cart from './Cart';
import LoginSignup from './LoginSignup';
import LoginCustomer from './LoginCustomer';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import men_banner from '../Components/Assets/banner_mens.png';
import women_banner from '../Components/Assets/banner_women.png';
import kid_banner from '../Components/Assets/banner_kids.png';
import LoginEmployee from './LoginEmployee';
import RegisterEmployee from './RegisterEmployee';
import RegisterCustomer from './RegisterCustomer';
import Admin from './Admin';
import AddProduct from '../Components/AddProduct/AddProduct';
import ListProduct from '../Components/ListProduct/ListProduct';
import ListUsers from '../Components/ListUser/ListUsers';
import ListEmployees from '../Components/ListEmployees/ListEmployees';
const AppContent = () => {
const location = useLocation();
  const isLoginCustomerPage = location.pathname === '/login-customer';
  const isLoginEmployeePage = location.pathname === '/login-employee';
  const isRegisterEmployeePage = location.pathname === '/register-employee';
  const isRegisterCustomerPage = location.pathname === '/register-customer';
  const isLoginPage = location.pathname === '/login';
  const isAdmin=location.pathname==='/admin';
  const isListproduct=location.pathname==='/admin-listproduct';
  const isAddproduct=location.pathname==='/admin-addproduct';
  const isListUsers=location.pathname==='/admin-listusers';
  const isListEmployees=location.pathname==='/admin-listemployees';
  return (
    <div>
    {!isListEmployees&&!isListUsers&&!isAddproduct&&!isListproduct&&  !isAdmin&&!isLoginCustomerPage&&!isLoginPage &&!isLoginEmployeePage &&!isRegisterEmployeePage &&!isRegisterCustomerPage  && <Navbar />}
    <Routes>
      <Route path='/' element={<Shop />} />
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
      <Route path="/product" element={<Product />}>
        <Route path=':productId' element={<Product />} />

      </Route>
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<LoginSignup />} />
      <Route path='/login-customer' element={<LoginCustomer />} />
      <Route path='/login-employee' element={<LoginEmployee/>} />
      <Route path='/register-employee' element={<RegisterEmployee/>} />
      <Route path='/register-customer' element={<RegisterCustomer/>} />
      <Route path='/admin' element={<Admin/>} />
      <Route path='/admin-addproduct' element={<AddProduct/>} />
      <Route path='/admin-listproduct' element={<ListProduct/>} />
      <Route path='/admin-listusers' element={<ListUsers/>} />
      <Route path='/admin-listemployees' element={<ListEmployees></ListEmployees>} />
    </Routes>
    {!isListEmployees&&!isListUsers&&!isAddproduct&&!isListproduct&&!isAdmin&&!isLoginCustomerPage&&!isLoginPage &&!isLoginEmployeePage &&!isRegisterEmployeePage &&!isRegisterCustomerPage  && <Footer />}
  </div>
  )
}

export default AppContent
