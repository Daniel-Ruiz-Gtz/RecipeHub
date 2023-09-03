"use client";
import { HiTrash, HiPencil } from "react-icons/hi";
import { useRouter } from "next/navigation";
import axios from "axios";

function Buttons({ recipeId }) {
  const router = useRouter();
  return (
    <div
      className="flex gap-x-1 align-top justify-end"
      onClick={async () => {
        if (confirm("¿Estas seguro que quieres eliminar esta receta?")) {
          const res = await axios.delete("/api/recipes/" + recipeId);
          if (res.status == 204) {
            router.push("/recipes");
            router.refresh();
          }
        }
      }}
    >
      <button>
        <HiPencil className="text-2xl text-black hover:text-gray-700" />
      </button>
      <button>
        <HiTrash className="text-2xl text-red-600 hover:text-red-700" />
      </button>
    </div>
  );
}

export default Buttons;
