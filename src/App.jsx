import React from 'react'
import Navbarr  from './Components/Navbarr/Navbarr'
import {Routes,Route} from "react-router-dom"
import Cart from './Components/Cart/Cart'
import Recipes from './Components/Recipes/Recipes'
import Wishlist from './Components/Wishlist/Wishlist'
import Datanotfound from './Components/Datanotfound'
import Home from './Components/Home'
import Recipedetails from './Components/Recipes/Recipedetails'
import { useEffect,useState } from 'react'
import axios from 'axios'
const App = () => {
  
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((res) => {
      // console.log(res.data.recipes);
      setRecipes(res.data.recipes);
    });
  }, []);
  return (
    <div>
      <Navbarr/>
      <Routes>
        <Route path="/recipes/:id" element={<Recipedetails RDatatoRdetails={recipes}/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/recipes" element={<Recipes RecipesData={recipes}/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="*" element={<Datanotfound/>}></Route>
      </Routes>
    </div>
  )
}

export default App
