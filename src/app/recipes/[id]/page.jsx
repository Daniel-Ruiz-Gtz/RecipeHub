import axios from "axios";
import Buttons from "./Buttons";

async function loadRecipe(recipeId) {
  const { data } = await axios.get(
    "http://localhost:3000/api/recipes/" + recipeId
  );
  return data;
}

async function RecipePage({ params }) {
  const recipe = await loadRecipe(params.id);
  return (
    <div className="flex justify-center items-center">
      <div className="p-6 bg-white">
        <Buttons recipeId={recipe.id} />
        <h1 className="text-4xl font-bold">{recipe.name}</h1>
        <p className="font-bold">Categoria:</p>
        <p>{recipe.category}</p>
        <p className="font-bold">Ingredientes:</p>
        <p>{recipe.ingredient}</p>
        <p className="font-bold">Pasos:</p>
        <p>{recipe.steps}</p>
        <div className="align-bottom">
          <p className="font-bold text-xs">Creado:</p>
          <p className="text-xs">
            {new Date(recipe.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipePage;
