import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// redux
import { useSelector } from "react-redux";

const Error401 = () => {
  const history = useHistory();

  // acceder state redux
  const alertMsg = useSelector((state) => state.alert.alertMsg);
  const userState = useSelector((state) => state.user);
  const { user, auth } = userState;

  // state local
  const [showMsg, setShowMsg] = useState(false);

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
  }, [alertMsg, auth, user]);

  /* TODO: Este componente se muestra cuando intentan acceder sin un token valido,
  con el fin de proteger rutas
  */

  return (
    <>
      {!user && !auth && (
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
              alt='icon error'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Error401;
