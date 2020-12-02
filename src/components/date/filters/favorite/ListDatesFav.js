// components
import DatePreview from "./DatePreview";
import Aside from "../../Layout/Aside";
import Header from "../../Layout/Header";
import { useEffect } from "react";
// component de error401
import Error401 from "../../../alert/Error401";
// redux actions
import { getDatesFavs } from "../../../../actions/dateActions";
// redux acceder a funciones y state
import { useDispatch, useSelector } from "react-redux";

const ListDates = () => {
  // para poder acceder al action
  const dispatch = useDispatch();
  const dates = useSelector((state) => state.date.datesFavs);
  const favs = useSelector((state) => state.date.favs);
  const alertState = useSelector((state) => state.alert);
  const { alertFav, alertMsgFav,reload } = alertState;

  useEffect(() => {
    dispatch(getDatesFavs());

    // eslint-disable-next-line
  }, [favs, alertFav,reload]);

  return (
    <>
      {/** TODO: auth sirve para proteger los componentes, ya que auth solo se activa cuando hay un autenticacion exitosa */}

      <>
        {/** Distribucion de flex */}
        <div className="flex md:flex-row flex-col ">
          {/** Barra lateral de usuario*/}
          <Aside />
          <div className="w-full bg-gradient-to-r from-blue-300  via-blue-300 to-blue-400">
            {/** Header */}
            <Header />
            <h2 className="text-white text-3xl mt-4 font-bold text-center ">
              Favoritas
            </h2>
            {/** Citas */}
            <div className="flex flex-wrap md:justify-evenly md:px-6 ">
              {dates.length !== 0 && !alertFav ? (
                dates.map((date, i) => (
                  <DatePreview key={`${date._id}-${i}`} date={date} />
                ))
              ) : (
                <div className="py-20 md:py-24 mx-auto w-1/2 md:w-full">
                  <p className="text-white font-semibold text-2xl mx-auto text-center animate__animated animate__fadeInUp">
                    {alertMsgFav}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ListDates;
