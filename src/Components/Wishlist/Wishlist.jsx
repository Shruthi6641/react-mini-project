import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import "./Wishlist.css"

const Wishlist = () => {
  const[favItems,setFavItems]=useState([])
  useEffect(()=>{
    let favitemsFromLS=JSON.parse(localStorage.getItem("favItems"))
    setFavItems(favitemsFromLS)
    
  },[])
  if(!favItems){
    return <h1 style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",height:"60vh"
    }}>No Items found ☹️</h1>
  }
  console.log(favItems)
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
      {favItems.map((item,index)=>{
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

export default Wishlist


