import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white hover text-2xl">
          <h1>RecipeHub</h1>
        </Link>
        <ul>
          <li>
            <Link href="/new" className="text-white hover:text-gray-500">
              Nueva Receta
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
