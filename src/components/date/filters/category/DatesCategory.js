import { useEffect, useState } from "react";
// components
import Aside from "../../Layout/Aside";
import Header from "../../Layout/Header";
import DatePreview from "./DatePreview";
import Error401 from "../../../alert/Error401";
import Spinner from "../../Layout/spinner/Spinner";
// redux
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../../../../actions/userActions";
import { getDatesByCategory } from "../../../../actions/dateActions";

const ListDatesCategory = () => {
  const dispatch = useDispatch();

  // acceder state redux
  const userState = useSelector((state) => state.user);
  const { auth, user, logout } = userState;
  const dateAlert = useSelector((state) => state.date);
  const { datesCategory, reload } = dateAlert;
  const alertState = useSelector((state) => state.alert);
  const { alert, alertMsg } = alertState;

  // state local
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (!logout && !auth && !user) dispatch(userAuth());
    // eslint-disable-next-line
  }, [auth, datesCategory, reload]);

  // lee categoria y manda al action
  const handleChange = (e) => {
    dispatch(getDatesByCategory(e.target.value));
    setSpinner(true);
    setTimeout(() => setSpinner(false), 1000);
  };

  return (
    <>
      {auth && user ? (
        <div className="flex md:flex-row flex-col ">
          <Aside category />
          <div className="w-full bg-gradient-to-t from-blue-300 to-blue-400">
            <Header />

            <div className="pb-24">
              <div>
                <h2 className="text-white text-2xl md:text-3xl mt-4 font-bold text-center ">
                  Filtra por categoria
                </h2>
                <form className="w-full  p-4 py-28   md:p-6 items-center">
                  <div>
                    {/** TODO:  dispatch(getDatesByCategory(e.target.value)) lee la categoria y hace la consulta */}
                    <select
                      data-cy='category'
                      onChange={(e) => handleChange(e)}
                      value=""
                      type="text"
                      id="category"
                      className="shadow appearance-none border rounded  mx-auto w-full md:py-2 p-4  px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50 focus:shadow-outline"
                    >
                      <option value="" disabled>
                        --Seleccionar--
                      </option>
                      <option value="social">Social</option>
                      <option value="deporte">Deporte</option>
                      <option value="medico">Medico</option>
                      <option value="cientifico">Cientifico</option>
                    </select>
                  </div>
                </form>
              </div>

              {/** Spinner y mensaje de error cuando se hace la consulta de las citas por categoria */}

              {/** TODO: Si la busqueda fue 404 */}
              {alert && alertMsg && !spinner && (
                <div className="md:py-0 pb-12 mx-auto w-1/2 md:w-full">
                  <p className="text-white  font-semibold text-2xl mx-auto text-center animate__animated animate__fadeInUp">
                    {alertMsg}
                  </p>
                </div>
              )}
              {spinner && (
                <div className="flex justify-center">
                  <Spinner />
                </div>
              )}

              {/** TODO: Lista de citas por la categoria */}

              <div className="flex flex-wrap md:justify-evenly md:px-6">
                {datesCategory &&
                  !alert &&
                  !spinner &&
                  datesCategory.map((date, i) => (
                    <DatePreview key={`${date._id}-${i}`} date={date} />
                  ))}
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

export default ListDatesCategory;
