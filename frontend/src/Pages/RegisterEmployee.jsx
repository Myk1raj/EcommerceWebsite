import React from 'react'
import './Css/LoginCustomer.css'
import back from '../Components/Assets/login-bg.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const RegisterCustomer = () => {
   const [formData,setFormData]=useState({
      name:"",
      phone:"",
      username:"",
      password:"",
      branch:""
   });

   const changeHandler=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value
      })
   }
   const register= async ()=>{
         console.log("register function",formData);
         let responseData;

         await fetch('http://localhost:4000/craeteemp', {
            method: 'POST',
            headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         }).then((resp) => resp.json()).then((data)=>responseData=data)
         if(responseData.success){
            localStorage.setItem('auth_token',responseData.token);
            
            window.location.replace('/admin');

         }else{
            alert(responseData.error);
         }
      }
  return (
    <div>
      <div className="login">
         <img src={back} alt="image" className="login__bg"/>
         <div className="login__form">
         <form action="">
            <h1 className="login__title">Register-Employee</h1>
            
            <div className="login__inputs">
               <div className="login__box">
                  <input value={formData.branch} name='branch' onChange={changeHandler} type="teext" placeholder="Branch Id" required className="login__input"/>
                  <i className="ri-lock-2-fill"></i>
               </div>
               <div className="login__box">
                  <input value={formData.name} name='name' onChange={changeHandler} type="text" placeholder="Name" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>
               <div className="login__box">
                  <input value={formData.phone} name='phone' onChange={changeHandler} type="tel" placeholder="Phone Number" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>
               <div className="login__box">
                  <input value={formData.username} name='username' onChange={changeHandler} type="text" placeholder=" Create username" required className="login__input"/>
                  <i className="ri-mail-fill"></i>
               </div>
               <div className="login__box">
                  <input value={formData.password} name='password' onChange={changeHandler} type="password" placeholder="Password" required className="login__input"/>
                  <i className="ri-lock-2-fill"></i>
               </div>
            </div>


            
         </form>
         <button  onClick={register} className="login__button">Register</button>

            <div className="login__register">
               Already have an account? <Link to="/login-customer">Login</Link>
            </div>
         </div>
         
      </div>
    </div>
  )
}

export default RegisterCustomer
