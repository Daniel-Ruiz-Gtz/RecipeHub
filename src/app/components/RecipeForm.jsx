"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredient: Array.from({ length: 10 }, (_, i) => `${i + 1}.`).join("\n"),
    steps: Array.from({ length: 10 }, (_, i) => `${i + 1}.`).join("\n"),
    category: "",
  });

  const [file, setFile] = useState(null);
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
    const formData = new FormData();
    formData.append("name", recipe.name);
    formData.append("ingredient", recipe.ingredient);
    formData.append("steps", recipe.steps);
    formData.append("category", recipe.category);

    if (file) {
      formData.append("image", file);
    }
    if (!params.id) {
      const res = await axios.post("/api/recipes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    } else {
      const res = await axios.put("/api/recipes/" + params.id, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
    }
    form.current.reset();
    router.refresh();
    router.push("/recipes");
  };

  return (
    <form
      className="bg-white dark:bg-slate-700 shadow-md rounded-md px-8 pb-8"
      onSubmit={handleSubmit}
      ref={form}
    >
      <label
        htmlFor="name"
        className=" block text-gray-700 dark:text-white text-sm font-bold"
      >
        Nombre de la Receta:
      </label>
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={recipe.name}
        className="dark:shadow-black dark:bg-slate-700 dark:text-white dark:border-black shadow appearance-none border rounded w-full py-2 px-3 mb-3"
        autoFocus
      />

      <label
        htmlFor="ingredient"
        className="block text-gray-700 dark:text-white text-sm font-bold"
      >
        Ingredientes:
      </label>
      <textarea
        name="ingredient"
        rows={10}
        onChange={handleChange}
        value={recipe.ingredient}
        className="dark:shadow-black dark:bg-slate-700 dark:text-white dark:border-black shadow appearance-none border rounded w-full py-2 px-3 mb-3"
      />

      <label
        htmlFor="steps"
        className="block text-gray-700 dark:text-white text-sm font-bold"
      >
        Pasos:
      </label>
      <textarea
        name="steps"
        rows={10}
        onChange={handleChange}
        value={recipe.steps}
        className="dark:shadow-black dark:bg-slate-700 dark:text-white dark:border-black shadow appearance-none border rounded w-full py-2 px-3 mb-3"
      />

      <label
        htmlFor="category"
        className="block text-gray-700 dark:text-white text-sm font-bold"
      >
        Categoria:
      </label>
      <select
        name="category"
        onChange={handleChange}
        value={recipe.category}
        className="dark:shadow-black dark:bg-slate-700 dark:text-white dark:border-black shadow appearance-none border rounded w-full py-2 px-3 mb-3"
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

      <label
        htmlFor="recipeImage"
        className="block text-gray-700 dark:text-white text-sm font-bold"
      >
        Imagen:
      </label>
      <input
        type="file"
        className="dark:shadow-black dark:bg-slate-700 dark:text-white dark:border-black shadow appearance-none border rounded w-full py-2 px-3 mb-3"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      {file && (
        <img
          className="w-96 object-contain mx-auto my-4"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {params.id ? "Actualizar Receta" : "Crear Receta"}
      </button>
    </form>
  );
}

export default RecipeForm;
