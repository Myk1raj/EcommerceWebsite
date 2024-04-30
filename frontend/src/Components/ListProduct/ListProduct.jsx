import React,{useEffect, useState} from 'react'
import './ListProduct.css'
import cross_icon from "../Assets/cross_icon.png"
import Admin from '../../Pages/Admin';
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Sidebar from '../Sidebar/Sidebar';
const ListProduct = () => {
  const [allproducts,setAllproducts]=useState([]);

  const fetchInfo=async ()=>{
    await fetch('http://localhost:4000/allproducts').then((resp) => resp.json()).then((data)=>{
      
      setAllproducts(data);
    })
  }

  const remove_product=async (id)=>{

    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo();

  }


  useEffect(()=>{
    fetchInfo();
  },[])

  return (
    <>
  <AdminNavbar />
  <div className='unique-hehe1'>
    <Sidebar />
    <div className='unique-list'>
      <div className="unique-list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="unique-list-product-all-products">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              <div key={index} className="unique-hello" >
                <div><img src={product.image} className='unique-icon' alt="product" /></div>
                <p>{product.name}</p>
                <p>{product.old_price}</p>
                <p>{product.new_price}</p>
                <p>{product.category}</p>
                <img className='unique-remove-icon' onClick={() => { remove_product(product.id) }} src={cross_icon} alt="" />
              </div>
              <hr /></>
          )
        })}
      </div>
    </div>
  </div>
</>

  )
}

export default ListProduct
