import { Link } from "react-router-dom";
// icons de like y dislike
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
// redux
import { useDispatch } from "react-redux";
import {
  selectDate,
  handleLikes,
  handleDislikes,
} from "../../../../actions/dateActions";

const DatePreview = ({ date }) => {
  const dispatch = useDispatch();

  return (
    <>
      {date && (
        <>
          {/** TODO: Una cita */}
          <div className="md:flex  md:my-4 m-4 w-full   lg:w-2/5	 h-64">
            <div className="w-full px-4 py-4 bg-white rounded-lg">
              <div className="flex items-center">
                <h2 className="text-xl text-gray-800 font-medium mr-auto max-h-7 overflow-hidden">
                  {date.name}
                </h2>

                <p className="text-gray-800 font-semibold tracking-tighter">
                  #{date.category}
                </p>
              </div>

              <p className="text-sm text-gray-700 mt-4 max-h-5 overflow-hidden">
                {date.description}
              </p>

              <p className="text-sm text-gray-700 mt-4 max-h-5 overflow-hidden">
                <span className="font-semibold">Cliente:</span> {date.client}
              </p>

              <p className="text-sm text-gray-700 mt-4 max-h-5 overflow-hidden">
                <span className="font-semibold">Fecha:</span> {date.date}
              </p>

              <p className="text-sm text-gray-700 mt-4 max-h-5 overflow-hidden	 ">
                <span className="font-semibold">Hora:</span> {date.hour}
              </p>

              <div className="flex items-center justify-end mt-4 md:my-4 top-auto">
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
