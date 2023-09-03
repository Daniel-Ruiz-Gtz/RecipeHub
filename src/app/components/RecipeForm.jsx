"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredient: "",
    steps: "",
    category: "",
  });

  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  const handleChange = (e) => {
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (params.id) {
      axios.get("/api/recipes/" + params.id).then((res) => {
        setRecipe({
          name: res.data.name,
          ingredient: res.data.ingredient,
          steps: res.data.steps,
          category: res.data.category,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!params.id) {
      const res = await axios.post("/api/recipes", recipe);
      console.log(res);
    } else {
      const res = await axios.put("/api/recipes/" + params.id, recipe);
      console.log(res);
    }
    form.current.reset();
    router.refresh();
    router.push("/recipes");
  };

  return (
    <form
      className="bg-white shadow-md rounded-md px-8 pb-8"
      onSubmit={handleSubmit}
      ref={form}
    >
      <label htmlFor="name" className=" block text-gray-700 text-sm font-bold">
        Nombre de la Receta:
      </label>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={recipe.name}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3"
        autoFocus
      />

      <label
        htmlFor="ingredient"
        className="block text-gray-700 text-sm font-bold"
      >
        Ingredientes:
      </label>
      <textarea
        name="ingredient"
        rows={5}
        onChange={handleChange}
        value={recipe.ingredient}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3"
      />

      <label htmlFor="steps" className="block text-gray-700 text-sm font-bold">
        Pasos:
      </label>
      <textarea
        name="steps"
        rows={5}
        onChange={handleChange}
        value={recipe.steps}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3"
      />

      <label
        htmlFor="category"
        className="block text-gray-700 text-sm font-bold"
      >
        Categoria:
      </label>
      <select
        name="category"
        onChange={handleChange}
        value={recipe.category}
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-3"
        defaultValue="" // Establece la opción predeterminada
      >
        <option value="" disabled>
          Selecciona una Categoria
        </option>
        <option>Plato Fuerte</option>
        <option>Entrada</option>
        <option>Postre</option>
        <option>Bebida</option>
      </select>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {params.id ? "Actualizar Receta" : "Crear Receta"}
      </button>
    </form>
  );
}

export default RecipeForm;
