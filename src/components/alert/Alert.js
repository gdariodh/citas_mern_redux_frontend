// redux - hook para acceder al state central
import { useSelector } from "react-redux";

const Alert = () => {
  // usar hook de useSelector para acceder al state de redux useSelector(state => state.nombreReducer);
  const alertState = useSelector((state) => state.alert);
  // extraemos los valores de alert state central
  const { alert, alertMsg, error } = alertState;

  return (
    <>
      {alert && (
        <>
          <div className="flex justify-center">
            <div className="p-2">
              {error ? (
                <div className="inline-flex items-center bg-white leading-none text-gray-900 rounded-full p-2 shadow text-teal text-sm">
                  <span className="inline-flex bg-red-500 text-white rounded-full h-6 px-3 justify-center items-center uppercase">
                    Error
                  </span>

                  <span className="inline-flex px-2 text-base font-semibold">
                    {alertMsg}
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center bg-green-400 leading-none rounded-full p-2 shadow text-white">
                  <span className="inline-flex px-2 text-base font-semibold">
                    {alertMsg}
                  </span>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Alert;
