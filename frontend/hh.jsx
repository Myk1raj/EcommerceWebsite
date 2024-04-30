if(product[1].quantity>0){
    return(
      <>
      <div>
          <div className="format">
          <img src={all_products[product[1].id].image} className='carticon' alt="" />
          <p>{all_products[product[1].id].name}</p>
          <p>{all_products[product[1].id].new_price}</p>
          <p>S</p>
          <button className='quantity' onClick={()=>{addToCart(product[1].id,1)}}>{product[1].quantity}</button>
          <p>{(all_products[product[1].id].new_price)*(product[1].quantity)}</p>
          <img src={remove_icon} className='buttonn' onClick={()=>{removeFromCart(product[1].id,1)}} alt="" />
          </div>
      </div>
      <hr />
      </>
  );
  }