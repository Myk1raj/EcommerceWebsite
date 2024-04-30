import React from 'react'
import './Css/LoginCustomer.css'
import back from '../Components/Assets/login-bg.png'
import { Link } from 'react-router-dom'
const LoginSignup = () => {
  return (
    <div>
      <div class="login">
         <img src={back} alt="image" class="login__bg"/>

         <form action="" class="login__form">
            <h1 class="login__title">Who are you:</h1>

            
            <Link to="/login-employee"><button type="submit" class="login__button">Employee</button></Link>
            <Link to="/login-customer"><button type="submit" class="login__button">Customer</button></Link>
            
         </form>
      </div>
    </div>
  )
}

export default LoginSignup
