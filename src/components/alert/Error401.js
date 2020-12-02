import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Error401 = () => {
  // acceder al msg error cuando la auth no es valida
  const alertMsg = useSelector((state) => state.alert.alertMsg);
  // state local
  const [showMsg, setShowMsg] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (alertMsg) {
      setTimeout(() => {
        history.push("/");
      }, 4000);
    }
    setTimeout(() => {
      setShowMsg(true);
    }, 2000);

    // eslint-disable-next-line
  }, [alertMsg]);

  /* TODO: Este componente se muestra cuando intentan acceder sin un token valido,
  con el fin de proteger rutas
  */

  return (
    <>
      <div className="bg-gradient-to-r from-gray-800 to-gray-800 h-full flex  items-center">
        <div className="md:w-1/3 w-full flex mx-auto justify-center flex-wrap">
          {showMsg && (
            <p className="text-white text-4xl mt-20 text-center animate__animated animate__fadeIn animate__slow">
              {alertMsg}
            </p>
          )}
          <img
            className="h-56 animate__animated animate__bounceOut animate__slow"
            src="https://www.flaticon.es/svg/static/icons/svg/547/547420.svg"
          />
        </div>
      </div>
    </>
  );
};

export default Error401;
