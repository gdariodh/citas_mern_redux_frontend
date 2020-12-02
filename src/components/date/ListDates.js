// components
import DatePreview from "./DatePreview";
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import { useEffect } from "react";
// component de error401
import Error401 from "../alert/Error401";
// redux actions
import { userAuth } from "../../actions/userActions";
import { getDates } from "../../actions/dateActions";
// redux acceder a funciones y state
import { useDispatch, useSelector } from "react-redux";

const ListDates = () => {
  // para poder acceder al action
  const dispatch = useDispatch();
  // acceder al state central de user
  const userState = useSelector((state) => state.user);
  const { auth, user, logout } = userState;
  const dates = useSelector((state) => state.date.dates);
  const favs = useSelector((state) => state.date.favs);
  // reload se activa cuando se elimina una cita por lo que useEffect se repite cuando reload sea true
  const reload = useSelector((state) => state.date.reload);

  useEffect(() => {
    // action que revisa si el usuario esta autenticado
    if (!logout) dispatch(userAuth());
    // si el usuario esta autenticado, obten las citas
    if (auth) {
      dispatch(getDates());
    }

    // TODO: datesFavs proviene de un action que tiene el children DatePreview cuando le da like o dislike se modifica el datesFavs

    // eslint-disable-next-line
  }, [auth, logout, reload, favs]);

  return (
    <>
      {/** TODO: auth sirve para proteger los componentes, ya que auth solo se activa cuando hay un autenticacion exitosa */}

      {auth && user ? (
        <>
          {/** Distribucion de flex */}
          <div className="flex md:flex-row flex-col ">
            {/** Barra lateral de usuario*/}
            <Aside />
            <div className="w-full bg-gradient-to-r from-blue-300  via-blue-300 to-blue-400">
              {/** Header */}
              <Header />
              {/** Citas */}
              <div className="flex flex-wrap md:justify-evenly md:px-6 animate__animated animate__fadeIn animate__fast">
                {dates.length !== 0 ? (
                  dates.map((date, i) => (
                    <DatePreview key={`${date._id}-${i}`} date={date} />
                  ))
                ) : (
                  <p>No hay citas, crea una </p>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/** TODO: Componente que se muestra si token no es valido */}
          <Error401 />
        </>
      )}
    </>
  );
};

export default ListDates;
