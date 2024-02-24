import { useState } from "react";
import CartWidget from "./CartWidget";
import LogoChef from "./LogoChef";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <nav className="bg-stone-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex item-center ml-10">
          <a href="#"><LogoChef /></a>
        </div>
        <div className=" flex item-center justify-end mr-10">
          <ul className="flex space-x-4 justify-end">
            <li>
              <a className="text-white text-xl" href="">
                Productos
              </a>
            </li>
            <li>
              <button
                className="text-white text-xl"
                onClick={() => setShowCategories(!showCategories)}
              >
                Categorias
              </button>
              {showCategories && (
                <ul className="absolute bg-white text-l w-[10%] text-center">
                  <li className="hover:bg-sky-700"><a href="">Clásicos</a></li>
                  <li className="hover:bg-sky-700"><a href="">Gourmet</a></li>
                  <li className="hover:bg-sky-700"><a href="">Fitness</a></li>
                </ul>
              )}
            </li>
            <li>
              <a className="text-white text-xl" href="">
                Promociones
              </a>
            </li>
            <li>
              <a className="text-white text-xl" href="">
                Contacto
              </a>
            </li>
            <li>
              <button>
                <CartWidget />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
