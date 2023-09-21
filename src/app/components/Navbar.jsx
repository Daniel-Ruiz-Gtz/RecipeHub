"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { HiEye } from "react-icons/hi";

function Navbar() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <nav className="bg-slate-400 dark:bg-zinc-900 text-black dark:text-white py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="dark:text-white hover text-2xl">
          <h1>RecipeHub</h1>
        </Link>
        <ul>
          <div className="flex">
            <li className="mx-2">
              <Link
                href="/new"
                className="text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
              >
                Nueva Receta
              </Link>
            </li>
            <li className="mx-2">
              <button onClick={handleChangeTheme}>
                <HiEye className="text-2xl" />
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
