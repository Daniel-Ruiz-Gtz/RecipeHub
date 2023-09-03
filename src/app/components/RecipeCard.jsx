import Link from "next/link";
function RecipeCard({ recipe }) {
  return (
    <Link
      className="bg-white rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-300 hover:cursor-pointer"
      href={`/recipes/${recipe.id}`}
    >
      <h1 className="text-lg font-bold">{recipe.name}</h1>
      <h1 className="text-2xl text-slate-600">{recipe.category}</h1>
    </Link>
  );
}

export default RecipeCard;
