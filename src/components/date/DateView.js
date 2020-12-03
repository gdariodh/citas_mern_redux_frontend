import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// components
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Error401 from "../alert/Error401";
// redux
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../actions/userActions";
import { deleteDate, selectDate } from "../../actions/dateActions";

const ListDates = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // acceder state redux
  const userState = useSelector((state) => state.user);
  const { auth, user, logout } = userState;
  const dateState = useSelector((state) => state.date);
  const { reload, dateSelect } = dateState;

  useEffect(() => {
    if (!logout && !auth && !user) dispatch(userAuth());
    if (reload) history.push("/dates");
    // eslint-disable-next-line
  }, [auth, dateSelect, reload]);

  return (
    <>
      {auth && user ? (
        <div className="flex md:flex-row flex-col ">
          <Aside view />
          <div className="w-full bg-gradient-to-t from-blue-300 to-blue-400">
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

                  <p className="text-sm text-gray-700 mt-4 overflow-y-hidden">
                    {dateSelect.description}
                  </p>

                  <p className="text-sm text-gray-700 mt-4 ">
                    <span className="font-semibold">Cliente:</span>{" "}
                    {dateSelect.client}
                  </p>

                  <p className="text-sm text-gray-700 mt-4 max-h-12 ">
                    <span className="font-semibold">Fecha:</span>{" "}
                    {dateSelect.date}
                  </p>

                  <p className="text-sm text-gray-700 mt-4 max-h-12 ">
                    <span className="font-semibold">Hora:</span>{" "}
                    {dateSelect.hour}
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
      ) : (
        <Error401 />
      )}
    </>
  );
};

export default ListDates;
