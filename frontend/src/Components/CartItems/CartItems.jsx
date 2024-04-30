import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {

    const {all_products,logout,new_price,getTotalCartAmount,cartItems,getTotalCartItems,addToCart,removeFromCart,cart} =useContext(ShopContext);
    
  return (
    <div className='cart'>
        <div className="format">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Size</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        </div>
        <hr />
        {cartItems.map((product,  index) => {
            
            let A=<></>;
            let B=<></>;
            let C=<></>;
            if(product[0].quantity>0){
              const index=all_products.findIndex((obj)=>obj.id===product[0].id);
              A=<>
              <div>
                  <div className="format">
                  <img src={all_products[index].image} className='carticon' alt="" />
                  <p>{all_products[index].name}</p>
                  <p>{all_products[index].new_price}</p>
                  <p>{product[0].size}</p>
                  <button className='quantity' onClick={()=>{addToCart(product[0].id,0);getTotalCartItems()}}>{product[0].quantity}</button>
                  <p>{(all_products[index].new_price)*(product[0].quantity)}</p>
                  <img src={remove_icon} className='buttonn' onClick={()=>{removeFromCart(product[0].id,0)}} alt="" />
                  </div>
              </div>
              <hr />
              </>
            }
            if(product[1].quantity>0){
              const index=all_products.findIndex((obj)=>obj.id===product[0].id);

              B=<>
              <div>
                  <div className="format">
                  <img src={all_products[index].image} className='carticon' alt="" />
                  <p>{all_products[index].name}</p>
                  <p>{all_products[index].new_price}</p>
                  <p>{product[1].size}</p>
                  <button className='quantity' onClick={()=>{addToCart(product[1].id,1)}}>{product[1].quantity}</button>
                  <p>{(all_products[index].new_price)*(product[1].quantity)}</p>
                  <img src={remove_icon} className='buttonn' onClick={()=>{removeFromCart(product[1].id,1)}} alt="" />
                  </div>
              </div>
              <hr />
              </>
            }
            if(product[2].quantity>0){
              const index=all_products.findIndex((obj)=>obj.id===product[0].id);

              C=<>
              <div>
                  <div className="format">
                  <img src={all_products[index].image} className='carticon' alt="" />
                  <p>{all_products[index].name}</p>
                  <p>{all_products[index].new_price}</p>
                  <p>{product[2].size}</p>
                  <button className='quantity' onClick={()=>{addToCart(product[2].id,2)}}>{product[2].quantity}</button>
                  <p>{(all_products[index].new_price)*(product[2].quantity)}</p>
                  <img src={remove_icon} className='buttonn' onClick={()=>{removeFromCart(product[2].id,2)}} alt="" />
                  </div>
              </div>
              <hr />
              </>
            }
            return(
              <>
              {A}
              {B}
              {C}
              </>
            )
        })}
      <div className="down">
        <div className="total">
            <h1>Cart Totals</h1>
            <div >
                <hr />
                <div className="totalitems">
                    <p>Total</p>
                    <p>{getTotalCartAmount()}</p>
                </div>
                <hr />
                
            </div>
            <button>Proceed to Checkout</button>
        </div>

      </div>
    </div>
  )
}

export default CartItems
