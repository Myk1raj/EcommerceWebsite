import React from 'react'
import './Popular.css'
import Item from '../Items/Item'
const Popular = () => {
    const [data_products,setData_products]=React.useState([]);
    React.useEffect(()=>{
        fetch('http://localhost:4000/popularwomen',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                'auth_token':`${localStorage.getItem('auth_token')}`
            }
        
        })
        .then(response=>response.json())
        .then(data=>setData_products(data))
    },[])
  return (
    <div className='popular'>
        <h1>
            POPULAR IN WOMEN
            <hr />
        </h1>
        <div className="popitem">
            {data_products.map((item,i)=>{
                return(
                    <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
                )
            })}
        </div>
      
    </div>
  )
}

export default Popular
