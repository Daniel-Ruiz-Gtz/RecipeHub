"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { HiEye, HiUserCircle } from "react-icons/hi";
import { signIn, signOut, useSession } from "next-auth/react";

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

  const { data: session } = useSession();

  return (
    <nav className="bg-slate-400 dark:bg-zinc-900 text-black dark:text-white py-3 mb-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="dark:text-white hover text-2xl font-semibold whitespace-nowrap flex items-center"
        >
          <Image
            src={"/RecipeHub.png"}
            width={50}
            height={50}
            alt="RecipeHub"
          />
          <h1>RecipeHub</h1>
        </Link>
        <ul>
          <div className="flex justify-center items-center">
            {session?.user && session.user.email == "danieldelat4@gmail.com" ? (
              <div className="flex justify-center items-center">
                <li className="mx-5 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                  <Link href="/new" className="">
                    Nueva Receta
                  </Link>
                </li>
                <li className="mx-1">
                  <button
                    onClick={async () => {
                      await signOut({ callbackUrl: "/" });
                    }}
                  >
                    <img
                      src={session.user.image}
                      width="30"
                      height="30"
                      alt="Log Out"
                      className="rounded-full"
                    />
                  </button>
                </li>
              </div>
            ) : (
              <li className="mx-2 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
                <button onClick={() => signIn()}>
                  <HiUserCircle className="text-2xl" />
                </button>
              </li>
            )}
            <li className="mx-1 text-black dark:text-white hover:text-gray-500 dark:hover:text-gray-300">
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
