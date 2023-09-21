import Link from "next/link";
function RecipeCard({ recipe }) {
  return (
    <Link
      className="bg-white dark:bg-slate-700 rounded-lg border-gray-800 dark:border-gray-200 mb-3 hover:bg-gray-300 dark:hover:bg-slate-500 hover:cursor-pointer"
      href={`/recipes/${recipe.id}`}
    >
      <div className="p-4">
        <h1 className="text-black dark:text-white text-lg font-bold">
          {recipe.name}
        </h1>
        <h1 className="text-slate-600 dark:text-slate-300 text-2xl">
          {recipe.category}
        </h1>
        {recipe.image && <img src={recipe.image} className="w-full" />}
      </div>
    </Link>
  );
}

export default RecipeCard;
