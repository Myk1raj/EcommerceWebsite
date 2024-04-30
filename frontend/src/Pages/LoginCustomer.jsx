import React,{useContext, useEffect, useState} from 'react'
import './Css/LoginCustomer.css'
import back from '../Components/Assets/login-bg.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../src/Context/ShopContext';

const LoginCustomer = () => {
   
   const [loginDetails,setLoginDetails]=useState("loginDetails");
   const [formData,setFormData]=useState({
      username:"",
      password:""
   });

   const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value
      })
   }
   const login= async (e)=>{

         console.log(loginDetails);
         console.log("login function",formData);
         let responseData;
         await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         }).then((resp) => resp.json()).then((data)=>responseData=data)
         if(responseData.success){
            
            localStorage.setItem('auth_token',responseData.token);
            window.location.replace('/');
         }else{
            alert(responseData.error);
         
         }
      }


  return (
    <div>
      <div className="login">
         <img src={back} alt="image" className="login__bg"/>
         <div className="login__form">
         <form>
            <h1 className="login__title">Login-Customer</h1>

            <div className="login__inputs">
               <div className="login__box">
                  <input value={formData.username} onChange={handleChange} type="text" name='username' placeholder="username" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>

               <div className="login__box">
                  <input value={formData.password} onChange={handleChange} type="password" name='password' placeholder="Password" required className="login__input"/>
                  <i className="ri-lock-2-fill"></i>
               </div>
               
            </div> 
         </form>
         <button onClick={login} className="login__button">Login</button>
         <div className="login__register">
               Don't have an account? <Link to="/register-customer">Register</Link>
         </div>
         </div>

         
         
      </div>
    </div>
  )
}

export default LoginCustomer
