import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectDate,
  deleteDate,
  handleLikes,
  handleDislikes,
} from "../../actions/dateActions";
// icons de like y dislike
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const DatePreview = ({ date }) => {
  const dispatch = useDispatch();
  return (
    <>
      {date && (
        <>
          {/** TODO: Template de la cita */}
          <div className="md:flex  md:my-4 m-4 w-full   lg:w-2/5	 h-64">
            <div className="w-full px-4 py-4 bg-white rounded-lg">
              <div className="flex items-center">
                <h2 className="text-xl text-gray-800 font-medium mr-auto max-h-6 overflow-hidden">
                  {date.name}
                </h2>

                <p className="text-gray-800 font-semibold tracking-tighter">
                  #{date.category}
                </p>
              </div>

              <p className="text-sm text-gray-700 mt-4 max-h-12 overflow-hidden	 ">
                cliente: {date.client}
              </p>

              <p className="text-sm text-gray-700 mt-4 max-h-5 overflow-hidden		 ">
                {date.description}
              </p>

              <p className="text-sm text-gray-700 mt-4 max-h-12 overflow-hidden	 ">
                Fecha de la cita: {date.date}
              </p>

              <p className="text-sm text-gray-700 mt-4 max-h-12 overflow-hidden	 ">
                Hora de la cita: {date.date}
              </p>

              <div className="flex items-center justify-end md:my-4 top-auto">
                <button
                  onClick={() => dispatch(deleteDate(date._id))}
                  className="bg-white text-red-500 focus:outline-none hover:text-red-600 px-4 py-2 rounded mr-auto hover:underline"
                >
                  Eliminar
                </button>

                {/** TODO: date.favorite viene del backend, como boolean, el componente se vuelve a cargar por el padre ListDates
              que se actualiza por datesFavs que se altera cuando se da like o dislike gracias al dispatch
               */}

                {!date.favorite ? (
                  <button
                    onClick={() => dispatch(handleLikes(date))}
                    className="flex  focus:outline-none p-2 mr-2"
                  >
                    <AiOutlineHeart className="w-6 h-6" />
                  </button>
                ) : (
                  <button
                    onClick={() => dispatch(handleDislikes(date))}
                    className="flex  focus:outline-none p-2 mr-2"
                  >
                    <AiFillHeart className="w-6 h-6" />
                  </button>
                )}

                <Link
                  onClick={() => dispatch(selectDate(date))}
                  to="/edit-date"
                  className=" bg-gray-200 text-blue-500 hover:text-blue-600 px-2 py-2 rounded-md mr-2"
                >
                  Editar
                </Link>

                <Link
                  to="/date"
                  onClick={() => dispatch(selectDate(date))}
                  className=" bg-blue-500 hover:bg-blue-600  text-gray-200 px-2 py-2 rounded-md "
                >
                  Ver mas
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DatePreview;
