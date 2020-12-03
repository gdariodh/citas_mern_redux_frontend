// components
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import { useEffect } from "react";
// // component de error401
// import Error401 from "../alert/Error401";
// // redux actions
// import { userAuth } from "../../actions/userActions";
import { deleteDate, selectDate } from "../../actions/dateActions";
// redux acceder a funciones y state
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const ListDates = () => {
  const history = useHistory();
  const dispatch = useDispatch();
//   const userState = useSelector((state) => state.user);

  const dateState = useSelector((state) => state.date);
  const { reload, dateSelect } = dateState;
  

  useEffect(() => {
    if (reload) history.push("/dates");
    // eslint-disable-next-line
  }, [dateSelect, reload]);

  return (
    <>
      {/** Distribucion de flex */}
      <div className="flex md:flex-row flex-col ">
        {/** Barra lateral de usuario*/}
        <Aside view />
        <div className="w-full bg-gradient-to-t from-blue-300 to-blue-400">
          {/** Header */}
          <Header />

          <div className="flex md:justify-center md:px-6 md:py-12 pt-10 pb-24 ">
            {/** TODO: Template de la cita  */}
            <div className="md:flex  md:my-4 m-4 w-full">
              <div className="w-full px-4 py-4 bg-white rounded-lg">
                <div className="flex items-center">
                  <h2 className="text-xl text-gray-800 font-medium mr-auto">
                    {dateSelect.name}
                  </h2>

                  <p className="text-gray-800 font-semibold tracking-tighter">
                    #{dateSelect.category}
                  </p>
                </div>
                <p className="text-sm text-gray-700 mt-4 ">
                  cliente: {dateSelect.client}
                </p>

                <p className="text-sm text-gray-700 mt-4 overflow-y-hidden	 ">
                  {dateSelect.description}
                </p>

                <p className="text-sm text-gray-700 mt-4 max-h-12 ">
                  Fecha de la cita: {dateSelect.date}
                </p>

                <p className="text-sm text-gray-700 mt-4 max-h-12 ">
                  Hora de la cita: {dateSelect.hour}
                </p>

                <div className="flex items-center justify-end mt-4 md:my-4 top-auto">
                  <button
                    onClick={() => dispatch(deleteDate(dateSelect._id))}
                    className="bg-white text-red-500 focus:outline-none hover:text-red-600 px-4 py-2 rounded mr-auto hover:underline"
                  >
                    Eliminar
                  </button>

                  {/** TODO: date.favorite viene del backend, como boolean, el componente se vuelve a cargar por el padre ListDates
              que se actualiza por datesFavs que se altera cuando se da like o dislike gracias al dispatch
               */}

                  <Link
                    onClick={() => dispatch(selectDate(dateSelect))}
                    to="/edit-date"
                    className=" bg-gray-200 text-blue-500 hover:text-blue-600 px-2 py-2 rounded-md mr-2"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListDates;
