import { conn } from "@/libs/mysql";

async function loadRecipes() {
  const result = await conn.query("SELECT * FROM recipe");
  return result;
}

async function HomePage() {
  const recipes = await loadRecipes();
  console.log(recipes);
  return (
    <div className="grid gap-4 grid-cols-4">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white rounded-lg border-gray-800 mb-3 p-4"
        >
          <h1 className="text-lg font-bold">{recipe.name}</h1>
          <h1 className="text-2xl text-slate-600">{recipe.category}</h1>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
