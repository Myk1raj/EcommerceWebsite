import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="logo">
        <img src={footer_logo} alt="" />
        <p>Myk-Shop</p>
      </div>
      <ul className="footerlinks">
        <li>Company</li>
        <li>About Us</li>
        <li>Our Services</li>
        <li>Privacy Policy</li>
        <li>Affiliate Program</li>
      </ul>
      <div className="social">
      <div className="socialicon">
          <img src={instagram_icon}valt="" />
          
        </div>
        <div className="socialicon">
        <img src={pintester_icon} alt="" />
          
        </div>
        
      </div>
      <div className="copy">
        <hr />
        <p>Copyright @ 2024 - ALL RIGHT RESERVED</p>
      </div>
    </div>
  )
}

export default Footer
