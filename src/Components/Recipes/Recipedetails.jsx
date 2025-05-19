import React from 'react'
import { useParams } from 'react-router-dom'
import "./RecipeDetails.css"
import { Button } from 'react-bootstrap'

const Recipedetails = ({RDatatoRdetails}) => {
  
  console.log(RDatatoRdetails);
  
 
  const id=useParams()
  console.log(id.id)
  const matchedRecipe=RDatatoRdetails.find((recipe)=>recipe.id===Number(id.id))
  console.log(matchedRecipe)
 const handleAddtocart=(cartitem)=>{
  let cartItems=JSON.parse(localStorage.getItem("cartItems"))||[]
  console.log(typeof cartItems)
  cartItems.push(cartitem)
  localStorage.setItem("cartItems",JSON.stringify(cartItems))
  alert("Item added to the cart")

 }


 const handleFavs=(favitem)=>{
  let favItems=JSON.parse(localStorage.getItem("favItems")) || []
  favItems.push(favitem)
  console.log(favItems)

  localStorage.setItem("favItems",JSON.stringify(favItems))
  alert("Item added to wishlist")
 }
  return (
    <div className='singleRecipe'>
      <div className='singleRecipe_left'>
        <img src={matchedRecipe.image} alt="" width={200}/>
      </div>
      <div className='singleRecipe_right'>
        <h2 style={{color:"lightcoral",fontFamily:"cursive"}}>Name:{matchedRecipe.name}</h2>
        <h4 style={{color:"gray"}}> 🧑‍🍳: {matchedRecipe.cuisine}</h4>
        <h4 style={{color:"gray"}}>⭐️:{matchedRecipe.rating}</h4>
        <h4 style={{color:"gray"}}>🍲:{matchedRecipe.servings}</h4>
         <span className='btn'>
          <Button variant="outline-primary" onClick={()=>handleAddtocart(matchedRecipe)}>🛒 Add to cart</Button>
         <Button variant="outline-danger" onClick={()=>handleFavs(matchedRecipe)}> ❤️Wishlist</Button>
         </span>
      </div>
    </div>
  )
}

export default Recipedetails
