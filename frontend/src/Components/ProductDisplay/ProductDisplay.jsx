import React, { useContext,useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
  const {product} = props;
  console.log("this is productus",product.id);
  const {addToCart} = useContext(ShopContext);
  const [size, setSize] = useState("S");
  const onSizeChange = (e) => {
    setSize(Number(e.target.value));
  }
  return (
    <div className='product'> 
     <div className="left">
      <div className="imglist">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>
      <div className="display">
        <img className='productdisplay-main' src={product.image} alt="" />
      </div>
     </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="rightstar">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <br />
          <p>(443)</p>
        </div>
        <div className="rightprices">
          <div className="old"><p>${product.old_price}</p></div>
          <div className="new"><p>${product.new_price}</p></div>
        </div>
        <div className="rightdiscription">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo doloremque cumque maiores, tempore ipsam quasi maxime molestias magnam. Quam asperiores repellat accusantium deserunt. Inventore rem praesentium voluptatibus quam optio!
        </div>
        <div className="rightsize">
          <h1>Select Size</h1>
          <div className="rigthsize1">
            <form action="">
              <div>
              <input type="radio" name="size" onChange={onSizeChange} id="small" value="0" />
              <label for="small">Small</label>
              <input type="radio" name="size"onChange={onSizeChange} id="medium" value="1" />
              <label for="medium">Medium</label>
              <input type="radio" name="size" onChange={onSizeChange} id="large" value="2" />
              <label for="large">Large</label>
              </div>
            </form>
          </div>
        </div>
        <button onClick={()=>{addToCart((product.id),size)}}>Add to Cart</button>
        
      </div>

    </div>
  )
}

export default ProductDisplay
