import React from 'react'
import './NewCollections.css'
import Item from '../Items/Item'
const NewCollections = () => {
  const [new_collections,setNewCollections]=React.useState([]);
  React.useEffect(()=>{
    fetch('http://localhost:4000/newcollection',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
          Accept:'application/json',
          'auth_token':`${localStorage.getItem('auth_token')}`
      }
    
    })
    .then(response=>response.json())
    .then(data=>setNewCollections(data))
  },[])
  return (
    <div className='new'>
      <h1>New collections</h1>
      <div className="hr">
        <hr />
      </div>
      <div className="collections">
        {new_collections.map((item,i)=>{
            return(
                <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
            )
        })}
      </div>
    </div>
  )
}

export default NewCollections
