// librerias
import { AiFillPlusCircle, AiFillHeart, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <>
      <aside className="w-full md:w-1/4 md:h-screen p-12">
        {/**TODO: Icon y text */}
        <div className="flex flex-wrap justify-center">
          <Link to="/dates">
            <img
              className="h-24"
              src="https://www.flaticon.es/svg/static/icons/svg/2026/2026512.svg"
              alt="icon welcome"
            />
          </Link>

          <p className="text md:mt-4 my-auto ml-2 text-2xl text-center">
            <span className="text-purple-600 text-center">Hi!</span>{" "}
            gdariodh
          </p>
        </div>

        {/** TODO: Botones */}
        <div className="flex justify-center flex-wrap">
          <Link
            to="/create-date"
            className="flex mt-8 md:mt-16 focus:outline-none"
          >
            <span className="mr-1 font-semibold text-xl">Agregar cita</span>{" "}
            <AiFillPlusCircle className="w-8 h-8" />
          </Link>
          <button className="flex md:mt-4 md:m-0 m-4 font-semibold text-xl focus:outline-none">
            <span className="mr-1 font-semibold text-xl">Citas favoritas</span>{" "}
            <AiFillHeart className="w-8 h-8" />
          </button>
          <button className="flex md:mt-4 font-semibold text-xl focus:outline-none">
            <span className="mr-1 font-semibold text-xl">Filtrar citas</span>{" "}
            <AiOutlineSearch className="w-8 h-8" />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Aside;
