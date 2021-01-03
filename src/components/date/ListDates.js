import { useEffect } from "react";
import { Link } from "react-router-dom";
// components
import DatePreview from "./DatePreview";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Error401 from "../alert/Error401";
// redux acceder a funciones y state
import { useDispatch, useSelector } from "react-redux";
// actions
import { userAuth } from "../../actions/userActions"; // verifica el token y otorga el permiso o no para las rutas protegidas
import { getDates } from "../../actions/dateActions";

const ListDates = () => {
  // para poder ejecutar actions
  const dispatch = useDispatch();
  // acceder al state redux
  const userState = useSelector((state) => state.user);
  const { auth, user, logout } = userState;
  const dateState = useSelector((state) => state.date);
  const { dates, favs, reload } = dateState;
  // reload es true cuando se elimina una cita con exito

  useEffect(() => {
    // TODO: condiciones para que no cicle el userAuth
    if (!logout && !auth && !user) dispatch(userAuth());
    if (auth) dispatch(getDates());
    // eslint-disable-next-line
  }, [auth, reload, favs]);

  // favs va cambiando cuando el usuario da like o dislike a la cita

  return (
    <>
      {/** TODO: auth es true cuando userAuth ha sido exitoso*/}

      {auth && user ? (
        <>
          <div className="flex md:flex-row flex-col ">
            {/** Barra lateral de usuario*/}
            <Aside />
            <div className="w-full bg-gradient-to-t from-blue-300 to-blue-400">
              {/** Header */}
              <Header />
              {/** Listado de citas */}
              <div className="flex flex-wrap pt-10 pb-32 md:py-0 md:justify-evenly md:px-6 animate__animated animate__fadeIn animate__fast">
                {dates.length !== 0 ? (
                  dates.map((date, i) => (
                    <DatePreview data-cy='list-dates' key={`${date._id}-${i}`} date={date} />
                  ))
                ) : (
                  <>
                    {/** TODO: Si no hay citas */}
                    <div className="flex flex-wrap w-full md:w-1/2 justify-center items-center">
                      <div className="px-10 py-20 ">
                        <h2 data-cy='no-date' className="text-white text-3xl mt-4 font-bold text-center ">
                          No hay citas, crea una para empezar.
                        </h2>
                      </div>
                      <div className="py-5 px-10">
                        <Link to="/create-date">
                          <img
                            className="h-32 w-32 animate__animated animate__fadeInDown"
                            src="https://www.flaticon.es/svg/static/icons/svg/1828/1828817.svg"
                            alt="icon space"
                          />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/** TODO: Token no valido o permiso denegado */}
          <Error401 />
        </>
      )}
    </>
  );
};

export default ListDates;
