import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="sticky bottom-0 p-2 w-full z-50 bg-slate-400 dark:bg-zinc-900 text-black dark:text-white">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-0">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link href="/" class="flex items-center mb-2 mx-4 sm:mb-0">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RecipeHub
            </span>
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#" class="mr-4 hover:underline md:mr-6 ">
                Desarrollador
              </Link>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-2" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 - Ruiz Gutiérrez Daniel de la Cruz
        </span>
      </div>
    </div>
  );
}

export default Footer;
