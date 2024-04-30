import React from 'react'
import './Item.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      
      <p>{props.name}</p>
      <div className="itemprices">
        <div className="old">
            <p>{props.old_price}</p>
        </div>
        <div className="new">
            <p>{props.new_price}</p>
      </div>
    </div>
    </div>
  )
}
Item.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  old_price: PropTypes.number,
  new_price: PropTypes.number
}
Item.defaultProps = {
    image: "https://via.placeholder.com/150",
    name: "Product",
    old_price: 0,
    new_price: 0
    }
export default Item
