import React,{useContext, useEffect, useState} from 'react'
import './Css/LoginCustomer.css'
import back from '../Components/Assets/login-bg.png'
import { Link } from 'react-router-dom'
const LoginCustomer = () => {
   
   const [loginDetails,setLoginDetails]=useState("loginDetails");
   const [formData,setFormData]=useState({
      username:"",
      password:""
   });

   const handleChange=(e)=>{
         setFormData({...formData,[e.target.name]:e.target.value
        
      })
      console.log(formData);
   }
   const login= async (e)=>{

         console.log(loginDetails);
         console.log("login function",formData);
         let responseData;
         await fetch('http://localhost:4000/loginemp', {
            method: 'POST',
            headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               username:formData.username,
               password:formData.password
            })
         }).then((resp) => resp.json()).then((data)=>responseData=data)
         if(responseData.success){
            localStorage.setItem('auth_token',responseData.token);
            console.log(responseData);
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
         <form>
            <h1 className="login__title">Login-Employee</h1>

            <div className="login__inputs">
               <div className="login__box">
                  <input value={formData.username} onChange={handleChange} type="text" name='username' placeholder="Username" required className="login__input"/>
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
               New in company? <Link to="/register-employee">Register</Link>
         </div>
         </div>

         
         
      </div>
    </div>
  )
}

export default LoginCustomer
