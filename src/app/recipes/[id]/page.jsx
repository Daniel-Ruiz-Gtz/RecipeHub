import axios from "axios";
import Buttons from "./Buttons";
import React from "react";

async function loadRecipe(recipeId) {
  const { data } = await axios.get(
    "http://localhost:3000/api/recipes/" + recipeId
  );
  return data;
}

async function RecipePage({ params }) {
  const recipe = await loadRecipe(params.id);
  return (
    <div className="justify-center items-center p-6 bg-white  dark:bg-slate-700">
      <div className="mb-5">
        <Buttons recipeId={recipe.id} />
        <h1 className="text-4xl font-bold text-black dark:text-white">
          {recipe.name}
        </h1>
        <p className="font-bold text-black dark:text-white">Categoria:</p>
        <p className="text-slate-600 dark:text-slate-300">{recipe.category}</p>
        <p className="font-bold text-black dark:text-white">Ingredientes:</p>
        <p className="text-slate-600 dark:text-slate-300">
          {recipe.ingredient.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <p className="font-bold text-black dark:text-white">Pasos:</p>
        <p className="text-slate-600 dark:text-slate-300">
          {recipe.steps.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="align-bottom">
          <p className="font-bold text-xs text-black dark:text-white">
            Creado:
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {new Date(recipe.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={recipe.image} className="w-2/3 h-2/3" alt="Receta" />
      </div>
    </div>
  );
}

export default RecipePage;
