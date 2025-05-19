
import Recipe from "./Recipe";
import "./Recipes.css";

const Recipes = ({RecipesData}) => {
//   const [recipes, setRecipes] = useState([]);
//   useEffect(() => {
//     axios.get("https://dummyjson.com/recipes").then((res) => {
//       console.log(res.data.recipes);
//       setRecipes(res.data.recipes);
//     });
//   }, []);
  return (
    <div>
        <div style={{textAlign:"center",marginTop:"2%",color:"lightblue",borderRadius:"10px",border:"1px solid black",width:"fit-content",marginLeft:"33%",padding:"10px",backgroundColor:"cadetblue",borderStyle:"none"}}>
           <h1>🥗 Explore Our Recipes</h1> 
        </div>
      <div className="allrecipes">
        {RecipesData.map((r) => {
          return <Recipe singleRecipe={r} />;
        })}
      </div>
    </div>
  );
};

export default Recipes;
