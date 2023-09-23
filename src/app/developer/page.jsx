import Image from "next/image";
import Link from "next/link";

function DeveloperPage() {
  return (
    <div className="bg-white dark:bg-slate-700 rounded-lg border-gray-800 dark:border-gray-200 mb-3">
      <div className="text-black dark:text-white p-4">
        <h1 className="font-bold text-2xl mb-5">Desarrollador</h1>
        <div className="flex px-5">
          <div>
            <p className="mb-2">
              Mi nombre es Daniel Ruiz y este es mi legado. Este proyecto tiene
              como único objetivo el poder preservar uno de los mayores tesoros
              en mi familia: La comida. Desde que era niño, he estado rodeado de
              aromas y sabores que han pasado de generación en generación. Mi
              abuela me enseñó sus secretos culinarios, mi madre compartió sus
              recetas tradicionales, y a medida que fui creciendo, me di cuenta
              de que la comida no solo es una fuente de sustento, sino también
              una forma de mantener viva nuestra cultura y nuestras raíces.
            </p>
            <p className="mb-2">
              En mi página de recetas, encontrarás una cuidadosa selección de
              platos que han sido parte de nuestras celebraciones familiares
              durante décadas. Cada receta está impregnada de historias, de
              momentos compartidos alrededor de la mesa, y de la pasión que he
              invertido en perfeccionarlas con el tiempo. Mi objetivo es que
              todos puedan experimentar la alegría y la conexión que la comida
              puede traer a nuestras vidas.
            </p>
            <p className="mb-2">
              Mi deseo es que este espacio se convierta en una fuente de
              inspiración culinaria y en un lugar donde podamos celebrar juntos
              la belleza de la comida y la tradición que lleva consigo.
            </p>
            <p className="mb-2">
              Gracias por unirte a este viaje culinario conmigo. Juntos,
              exploraremos sabores, crearemos recuerdos y mantendremos viva la
              magia de la comida en nuestras vidas. ¡Bienvenidos a mi mundo
              gastronómico!
            </p>
            <h2 className="font-bold text-2xl">Código Abierto</h2>
            <p>
              El código de esta Web App es de código abierto, por lo tanto si
              encuentras algún error o gustas implementar alguna funcionalidad
              eres libre de aplicarlo. Todo lo necesario se encuentra en mi
              repositorio de{" "}
              <a
                href="https://github.com/Daniel-Ruiz-Gtz/RecipeHub"
                className=" text-sky-600 hover:underline"
                target="_blank"
              >
                Github
              </a>
              .
            </p>
          </div>
          <div className="relative">
            <Image
              src={"/Profile.jpg"}
              width={500}
              height={600}
              layout="responsive"
              alt="Daniel Ruiz"
            />
          </div>
        </div>
        <h2 className="font-bold text-2xl mb-3">Conecta Conmigo</h2>
        <div>
          <Link href="https://github.com/Daniel-Ruiz-Gtz" target="_blank">
            <div className="flex items-center py-2 pl-3">
              <Image
                src={"/icon_github.png"}
                width={40}
                height={40}
                alt="Github"
              />
              <span className="px-5">Github</span>
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/danielruizgtz/"
            target="_blank"
          >
            <div className="flex items-center py-2 pl-3">
              <Image
                src={"/icon_linkedin.png"}
                width={40}
                height={40}
                alt="Linkedin"
              />
              <span className="px-5">Linkedin</span>
            </div>
          </Link>
          <Link href="https://twitter.com/Daniel_Ruiz_Gtz" target="_blank">
            <div className="flex items-center py-2 pl-3">
              <Image
                src={"/icon_twitter.png"}
                width={40}
                height={40}
                alt="Twitter"
              />
              <span className="px-5">Twitter</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeveloperPage;
