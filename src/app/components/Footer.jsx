import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bottom-0 left-0 right-0 p-2 z-50 bg-slate-400 dark:bg-zinc-900 text-black dark:text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-0">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-2 mx-4 sm:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RecipeHub
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/developer" className="mr-4 hover:underline md:mr-6 ">
                Desarrollador
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span className="block text-sm sm:text-center dark:text-gray-400">
          © 2023 - Ruiz Gutiérrez Daniel de la Cruz
        </span>
      </div>
    </div>
  );
}

export default Footer;
