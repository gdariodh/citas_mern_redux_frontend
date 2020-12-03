import { Link } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { selectDate } from "../../../../actions/dateActions";

const DatePreview = ({ date }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="md:flex  md:my-4 m-4 w-full   lg:w-2/5	 h-64">
        <div className="w-full px-4 py-4 bg-white rounded-lg">
          <div className="flex items-center">
            <h2 className="text-xl text-gray-800 font-medium mr-auto  max-h-7 overflow-hidden">
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

          <p className="text-sm text-gray-700 mt-4 max-h-5 overflow-hidden">
            <span className="font-semibold">Hora:</span> {date.hour}
          </p>

          <div className="flex items-center justify-end mt-4 md:my-4 top-auto">
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
  );
};

export default DatePreview;
