import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {selectDate, deleteDate} from '../../../../actions/dateActions'

const DatePreview = ({date}) => {

    const dispatch = useDispatch()

    return ( 
        <>
        <div className="md:flex  md:my-4 m-4 w-full   lg:w-2/5	 h-64">
            <div className="w-full px-4 py-4 bg-white rounded-lg">
              <div className="flex items-center">
                <h2 className="text-xl text-gray-800 font-medium mr-auto">
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
                <button onClick={() => dispatch(deleteDate(date._id))} className="bg-white text-red-500 hover:text-red-600 px-4 py-2 rounded mr-auto hover:underline">
                  Eliminar
                </button>
                <Link
                  onClick={() => dispatch(selectDate(date))} 
                  to="/edit-date"
                  className=" bg-gray-200 text-blue-500 hover:text-blue-600 px-2 py-2 rounded-md mr-2"
                >
                  Editar
                </Link>
                <button className=" bg-blue-500 hover:bg-blue-600  text-gray-200 px-2 py-2 rounded-md ">
                  Ver mas
                </button>
              </div>
            </div>
          </div>
        </>

        
     );
}
 
export default DatePreview;