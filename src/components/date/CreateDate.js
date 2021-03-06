import { useEffect } from "react";
import { useHistory } from "react-router-dom";
// components
import Aside from "./Layout/Aside";
import Header from "./Layout/Header";
import Alert from "../alert/Alert";
import Error401 from "../alert/Error401";
// custom hook - lee data
import useDate from "../../hooks/useDate";
// redux
import { useSelector, useDispatch } from "react-redux";
import { userAuth } from "../../actions/userActions";

const CreateDate = () => {
  // extrae values del custom hook que lee la data del form
  const { formik, values, handleChange, handleSubmit, handleBlur } = useDate();
  const { name, description, client, category, date, hour } = values;

  const dispatch = useDispatch();

  // acceder state redux
  const userState = useSelector((state) => state.user);
  const { auth, user, logout } = userState;
  const redirect = useSelector((state) => state.date.redirect); // true cuando hay created exitoso
  const alert = useSelector((state) => state.alert.alert);
  const history = useHistory();

  useEffect(() => {
    if (!logout && !auth && !user) dispatch(userAuth());
    if (redirect) setTimeout(() => history.push("/dates"), 1000);
    // eslint-disable-next-line
  }, [auth, redirect, alert]);

  return (
    <>
      {auth && user ? (
        <div className="flex md:flex-row flex-col ">
          <Aside create />
          <div className="w-full bg-gradient-to-t from-blue-300 to-blue-400">
            <Header />

            <div className="flex flex-wrap md:justify-evenly md:px-6">
              {/** TODO: CREAR CITA FORM*/}
              {!alert ? (
                <h2 className="mx-auto text-white text-2xl md:text-3xl font-bold my-4">
                  Crear cita
                </h2>
              ) : (
                <div className="mx-auto">
                  <Alert />
                </div>
              )}
              <div className="flex justify-center container mx-auto">
                <form
                  data-cy="form"
                  onSubmit={handleSubmit}
                  className="w-full bg-white border  md:rounded-xl shadow-md md:flex md:justify-between p-4 md:p-6"
                >
                  {/** TODO: PRIMER DIV -> TITULO,CLIENTE,FECHA,HORA */}
                  <div className="md:w-1/3">
                    <div className=" mb-4 ">
                      <label
                        className="block text-gray-600 mb-2"
                        htmlFor="name"
                      >
                        Titulo
                      </label>
                      <input
                        data-cy="name"
                        value={name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="name"
                        className="shadow-sm appearance-none border-b-2 border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-50"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <div data-cy="error-name" className="my-1 text-red-500">
                          <span className="font-semibold">
                            {formik.errors.name}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className=" mb-4">
                      <label
                        className="block text-gray-600 mb-2"
                        htmlFor="client"
                      >
                        Cliente
                      </label>
                      <input
                        data-cy="client"
                        value={client}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="client"
                        className="shadow-sm appearance-none border-b-2 border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-50"
                      />
                      {formik.touched.client && formik.errors.client && (
                        <div data-cy="error-client" className="my-1 text-red-500">
                          <span className="font-semibold">
                            {formik.errors.client}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-gray-600 mb-2"
                        htmlFor="date"
                      >
                        Fecha
                      </label>
                      <input
                        data-cy="date"
                        value={date}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="date"
                        id="date"
                        className="shadow-sm appearance-none border-b-2 border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-50"
                      />
                      {formik.touched.date && formik.errors.date && (
                        <div data-cy="error-date" className="my-1 text-red-500   ">
                          <span className="font-semibold">
                            {formik.errors.date}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-600  mb-2"
                        htmlFor="hour"
                      >
                        Hora
                      </label>
                      <input
                        data-cy="hour"
                        value={hour}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="time"
                        id="hour"
                        className="shadow-sm appearance-none border-b-2 border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-gray-50"
                      />
                      {formik.touched.hour && formik.errors.hour && (
                        <div data-cy="error-hour" className="my-1 text-red-500  ">
                          <span className="font-semibold">
                            {formik.errors.hour}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/** TODO: SEGUNDO DIV -> DESCRIPCION Y SUBMIT */}
                  <div className="md:w-1/2">
                    <div className="mb-4 ">
                      <label
                        className="block text-gray-600  mb-2"
                        htmlFor="category"
                      >
                        Categoria
                      </label>
                      <select
                        data-cy="category"
                        value={category}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="category"
                        className="shadow appearance-none border rounded  mx-auto w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50 focus:shadow-outline"
                      >
                        <option value="" disabled>
                          --Seleccionar--
                        </option>
                        <option value="social">Social</option>
                        <option value="deporte">Deporte</option>
                        <option value="medico">Medico</option>
                        <option value="cientifico">Cientifico</option>
                      </select>
                      {formik.touched.category && formik.errors.category && (
                        <div data-cy="error-category" className="my-1 text-red-500  ">
                          <span className="font-semibold">
                            {formik.errors.category}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mb-4 ">
                      <label
                        className="block text-gray-600  mb-2"
                        htmlFor="description"
                      >
                        Descripcion
                      </label>
                      <textarea
                        data-cy="description"
                        value={description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text"
                        id="description"
                        className="shadow appearance-none border rounded  md:h-48 h-32 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-gray-50 focus:shadow-outline"
                      />
                      {formik.touched.description && formik.errors.description && (
                        <div  data-cy="error-description" className="my-1 text-red-500  ">
                          <span className="font-semibold">
                            {formik.errors.description}
                          </span>
                        </div>
                      )}
                    </div>
                    <input
                      data-cy="submit"
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-full p-3 border rounded-full focus:outline-none text-white uppercase font-bold"
                      value="crear cita"
                    />
                  </div>
                </form>
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

export default CreateDate;
