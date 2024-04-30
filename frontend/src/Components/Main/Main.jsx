import React from 'react'
import './Main.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
const Main = () => {
  return (
    <div className='main'>
        <div className="main-left">
            <h2>EXCITINGGGG!!!!!!!!!</h2>
            <div>
                <div className="icon">
                    <p>New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="latest">
                <div>
                    Latest collections
                </div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
         



        <div className="main-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Main
