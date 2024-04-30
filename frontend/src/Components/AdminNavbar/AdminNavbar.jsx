import React,{ useState } from 'react'
import './AdminNavbar.css'
import Modal from 'react-modal';
import navlogo from '../../Components/Assets/nav-logo.svg'
import navProfile from '../Assets/nav-profile.svg'
import { Link } from 'react-router-dom'
Modal.setAppElement('#root');
const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className='navbar'>
        <img src={navlogo} className='navlogo' alt="" />
        <div className='hell'> 
        <img src={navProfile} onClick={()=>setModalIsOpen(true)} className='navprofile' alt="" />
        <Link to='/login' onClick={()=>{localStorage.removeItem('auth_token');}} className='navlink'>Logout</Link>

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
        <h1 style={{ fontSize: '30px' }}>NAME: </h1>
        <h1 style={{ fontSize: '30px' }}>USERNAME: 2</h1>
        <h1 style={{ fontSize: '30px' }}>BRANCH : </h1>
        <h1 style={{ fontSize: '30px' }}>ADD PHONE NUMBERS : </h1>
      </div>
      <form>
        <label htmlFor="phone" style={{ display: 'block', textAlign: 'center', marginBottom: '10px', fontSize: '30px' }}>
          <input
            type="tel"
            id="phone"
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
          
        >
          Add Phone Number
        </button>
      </div>
    </Modal>    
      
    </div>
  )
}

export default Navbar
