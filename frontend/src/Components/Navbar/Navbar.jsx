import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import user_logo from '../Assets/user_logo.png'

Modal.setAppElement('#root'); // This line is needed for accessibility reasons

const Navbar = () => {
    const [category, setCategory] = useState("Shop");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [user,setUser]=useState({});
    const {all_products,logout,cart,new_price,cartItems,getTotalCartItems,getTotalCartAmount,addToCart,removeFromCart} = useContext(ShopContext);
    let nu=cart;
    useEffect(()=>{
      nu=getTotalCartItems();
    })
    const [formData,setFormData]=useState({
      phone:0
    });

    const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value
      })
      console.log(formData);
    }
    const hogaya=(e)=>{
      console.log("hogaya");
      fetch('http://localhost:4000/addphone', {
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'auth_token':`${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify({
          phone:formData.phone
        })
      }).then((resp) => resp.json()).then((data)=>{
        console.log(data)
        alert(data.error);
      })
      
    }


    useEffect(()=>{
      
      if(localStorage.getItem('auth_token')){
        console.log("token is there");
        fetch('http://localhost:4000/getinfo',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth_token':`${localStorage.getItem('auth_token')}`,
                Accept:'application/json'
            },
            
        }).then((response) => response.json()).then((data) => {
          console.log(data);
            setUser(data);
            
        })
    }},[])
    console.log(user);  
    return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>Myk-shop</p>
    </div>
    <div className='nav-menu'>
        <ul>
            
        <li onClick={()=>{setCategory("Shop")}}> <Link style={{textDecoration:"none"}}  to="/">Shop</Link>  {category==="Shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setCategory("Men")}}> <Link style={{textDecoration:"none"}} to="/mens">Men</Link> {category==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setCategory("Women")}}> <Link style={{textDecoration:"none"}} to="/womens">Women</Link> {category==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setCategory("Kids")}}> <Link style={{textDecoration:"none"}} to="/kids">Children</Link> {category==="Kids"?<hr/>:<></>}</li>
        </ul>
    </div>
    <div className='nav-login'>
        <Link to = "/cart"><img src={cart_icon} alt='' /></Link>
        <div className="counter">{nu}</div>
        <div className="logo">
        {localStorage.getItem('auth_token')?<img src={user_logo} alt="" onClick={()=>setModalIsOpen(true)}/>:<></>}
        </div>
        {localStorage.getItem('auth_token')?<Link to = "/"><button onClick={logout}>Logout</button></Link>:<Link to = "/login"><button>Login</button></Link>}
        
    </div>
    
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={{
        overlay: {
          backgroundColor: 'rgba(10, 10, 10, 0.7)',
        },
        content: {
          width: '50%',
          height: '50%',
          margin: 'auto',
          borderRadius: '20px',
          border: 'none',
          padding: '20px',
          background: '#fff',
          boxShadow: '1px 1px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '30px' }}>NAME: {user.name}</h1>
        <h1 style={{ fontSize: '30px' }}>USERNAME: {user.username} 2</h1>
        <h1 style={{ fontSize: '30px' }}>ADD PHONE NUMBERS : </h1>
      </div>
      <form>
        <label htmlFor="phone" style={{ display: 'block', textAlign: 'center', marginBottom: '10px', fontSize: '30px' }}>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            style={{
              width: '40%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          />
        </label>
      </form>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{
            backgroundColor: '#4CAF50', // Background color
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '12px', // Border radius
          }}
          onClick={hogaya}
        >
          Add Phone Number
        </button>
      </div>
    </Modal>


    </div>
  )
}

export default Navbar;
