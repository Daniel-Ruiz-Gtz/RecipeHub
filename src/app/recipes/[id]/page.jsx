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
    <div className="flex justify-center">
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <div className="p-6 dark:text- bg-white  dark:bg-slate-700 ">
          <Buttons recipeId={recipe.id} />
          <h1 className="text-4xl font-bold text-black dark:text-white">
            {recipe.name}
          </h1>
          <p className="font-bold text-black dark:text-white">Categoria:</p>
          <p className="text-slate-600 dark:text-slate-300">
            {recipe.category}
          </p>
          <p className="font-bold text-black dark:text-white">Ingredientes:</p>
          <p className="text-slate-600 dark:text-slate-300">
            {recipe.ingredient}
          </p>
          <p className="font-bold text-black dark:text-white">Pasos:</p>
          <p className="text-slate-600 dark:text-slate-300">{recipe.steps}</p>
          <div className="align-bottom">
            <p className="font-bold text-xs text-black dark:text-white">
              Creado:
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {new Date(recipe.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      <img src={recipe.image} className="w-1/3 h-1/3 justify-center" alt="" />
    </div>
  );
}

export default RecipePage;
