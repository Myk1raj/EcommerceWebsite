import React,{useState} from 'react'
import './AddProduct.css'
import upload_area from '../Assets/upload_area.svg'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import Sidebar from '../Sidebar/Sidebar';
const AddProduct = () => {
  const [image,setImagee]=useState(false);
  const [productDetails,setProductDetails]=useState({
    name:'',
    image:'',
    old_price:'',
    new_price:'',
    category:''
  });
  const imageHandler=(e)=>{
    setImagee(e.target.files[0]);
  }
  const changeHandler=(e)=>{
    
    setProductDetails({...productDetails,[e.target.name]:e.target.value});
    console.log(productDetails);
  }

  
  const Add_product= async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers:{
        Accept: 'application/json',
      },
      body: formData
    }).then((resp) => resp.json()).then((data)=>{responseData=data})

    if(responseData.success){
      console.log('success');
      product.image = responseData.profile_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      }).then((resp) => resp.json()).then((data)=>{
        data.success?alert('Product Added Successfully'):alert('Product Not Added');
      })
    }
  }


  return (
    <>
  <AdminNavbar />
  <div className="unique-hehe">
    <Sidebar />
    <div className='unique-add'>
      <div className="unique-add-product-item">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder="Product Title"/>
      </div>
      <div className="unique-add-product-price">
        <div className="unique-add-product-item">
          <p>Product Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder='Product Price' />
        </div>
        <div className="unique-add-product-item">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder='Product Price' />
        </div>
      </div>
      <div className="unique-add-product-item">
        <p>Product category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='unique-add-product-selector' >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </div>
      <div className="unique-add-product-item">
        <label htmlFor="unique-file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='unique-add-product-thumbnail-image' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='imgae' id='unique-file-input' hidden />
      </div>
      <button onClick={()=>{Add_product()}} className='unique-add-button'>ADD</button>
    </div>
  </div>
</>

  )
}

export default AddProduct
