// librerias
import { AiFillPlusCircle, AiFillHeart, AiOutlineSearch,AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
const Aside = ({ create, edit }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <aside className="w-full md:w-1/4 md:h-screen p-12">
        {/**TODO: Icon y text */}
        <div className="md:fixed md:grid">
          <div className="flex flex-wrap justify-center md:grid md:mx-auto md:place-items-center">
            <Link to="/dates">
              <img
                className="h-24 md:h-28"
                src="https://www.flaticon.es/svg/static/icons/svg/2026/2026512.svg"
                alt="icon welcome"
              />
            </Link>

            <p className="text md:mt-6 my-auto ml-2 text-2xl text-center">
              <span className="text-blue-500 hover:text-blue-600 text-center">
                Hi!
              </span>{" "}
              {user.username}
            </p>
          </div>

          {/** TODO: Botones */}
          <div className="flex justify-center flex-wrap md:grid md:place-items-center md:mx-auto  mt-8 md:mt-16">
            {!create && !edit && (
              <Link to="/create-date" className="flex  focus:outline-none">
                <span className="mr-1 font-semibold text-xl">Agregar cita</span>{" "}
                <AiFillPlusCircle className="w-8 h-8" />
              </Link>
            )}

            {
              create || edit ?  <Link to="/dates" className="flex  focus:outline-none">
                <span className="mr-1 font-semibold text-xl">Volver a citas</span>{" "}
                <AiOutlineRollback className="w-8 h-8" />
              </Link>
            : null}

            <Link to='/dates-favs' className="flex md:mt-4 md:m-0 m-4 font-semibold text-xl focus:outline-none">
              <span className="mr-1 font-semibold text-xl">
                Citas favoritas
              </span>{" "}
              <AiFillHeart className="w-8 h-8" />
            </Link>

            <Link
              to="/dates-category"
              className="flex md:mt-4 font-semibold text-xl focus:outline-none"
            >
              <span className="mr-1 font-semibold text-xl">Filtrar citas</span>{" "}
              <AiOutlineSearch className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Aside;
