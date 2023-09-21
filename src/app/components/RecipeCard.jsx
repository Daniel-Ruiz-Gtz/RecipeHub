import Link from "next/link";
function RecipeCard({ recipe }) {
  return (
    <Link
      className="bg-white rounded-lg border-gray-800 mb-3 hover:bg-gray-300 hover:cursor-pointer"
      href={`/recipes/${recipe.id}`}
    >
      <div className="p-4">
        <h1 className="text-lg font-bold">{recipe.name}</h1>
        <h1 className="text-2xl text-slate-600">{recipe.category}</h1>
        {recipe.image && <img src={recipe.image} className="w-full" />}
      </div>
    </Link>
  );
}

export default RecipeCard;
