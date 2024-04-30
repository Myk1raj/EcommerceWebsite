import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="left">
            <h1>Exclusive</h1>
            <h1>Offer For You</h1>
            <p>Only On Best Sellers Products</p>
            <button>Check Out Now</button>

        </div>
        <div className="right">
            <img src={exclusive_image}  />
        </div>
      
    </div>
  )
}

export default Offers
