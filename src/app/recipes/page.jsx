import { conn } from "@/libs/mysql";
import RecipeCard from "../components/RecipeCard";

async function loadRecipes() {
  const result = await conn.query("SELECT * FROM recipe");
  return result;
}

async function HomePage() {
  const recipes = await loadRecipes();
  return (
    <div className="grid gap-4 grid-cols-4">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}

export default HomePage;
