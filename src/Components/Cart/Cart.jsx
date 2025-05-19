import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import "./Cart.css"

const Cart = () => {
  const[cartItems,setCartItems]=useState([])
  useEffect(()=>{
    let cartitemsFromLS=JSON.parse(localStorage.getItem("cartItems"))
    setCartItems(cartitemsFromLS)
    
  },[])
  console.log(cartItems)
  if(!cartItems){
    return <h1 style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"
    }}>No Items Found</h1>
  }
  return (
    <div className='table'>
      <Table striped="columns">
      <thead>
        <tr>
          <th>S.No</th>
          <th> Name</th>
          <th>Image</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
      {cartItems.map((item,index)=>{
        return(
          <tr>
            <td><h3>{index+1}.</h3></td>
            <td><h3>{item.name}</h3></td>
            <td><img src={item.image} alt="" width={70} /></td>
            <td><h3>⭐️{item.rating}</h3></td>
          </tr>
        )
      })}
      </tbody>
    </Table>
    </div>
  )
}

export default Cart

