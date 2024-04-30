import React, {useContext} from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../../src/Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item';


const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className='cat'>
      <img id='img' src={props.banner} alt="" />
      <div className="shopIndex">
        <p>
          <span >
            Showing 12   
          </span>Out of 26 products
        </p>
        <div className="sort">
          sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="category-products">
        {
          all_products.map((item,i) => {
            if(item.category ===props.category){
              return (
                <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
              )
            }
            
            
          })
        }
      </div>
      <div className="loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
