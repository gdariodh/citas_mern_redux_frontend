import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// components
import Alert from "../alert/Alert";
// hook que lee los datos del formulario y que trabajara en conjunto con userAction redux
import useLogin from "../../hooks/useLogin";
// redux state
import { useSelector } from "react-redux";

const Login = () => {
  const history = useHistory();

  // obtener login state de user
  const login = useSelector((state) => state.user.login);

  useEffect(() => {
    // login solo se activa cuando hay login exitoso, por lo que revisa cuando sea true y hace redirect
    if (login) setTimeout(() => history.push("/dates"), 2000);
    // eslint-disable-next-line
  }, [login]);

  // custom hook - lee datos
  const { formik, values, handleChange, handleSubmit, handleBlur } = useLogin();

  // extraer los initialvalues de formik que definimos
  const { data, password } = values;

  return (
    <>
      <img
        data-cy='img-login'
        className="h-24 mx-auto mt-6 xl:mt-3 md:mt-32"
        src="https://www.flaticon.es/svg/static/icons/svg/3768/3768079.svg"
        alt="icon login"
      />

      <h2 className="text-center text-3xl font-bold">Log in</h2>
      <Alert data-cy='alert'/>
      <div className="flex justify-center mt-2 container mx-auto">
        <form
          data-cy='form'
          onSubmit={handleSubmit}
          className="bg-white w-full md:w-5/12 px-8 py-6"
        >
          <div className=" mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="data">
              Email o usuario
            </label>
            {/** TODO: el htmlFor, id y values de los inputs se llaman data porque se ingresa un correo o un usuario */}
            <input
              data-cy='user'
              value={data}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              id="data"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.data && formik.errors.data && (
              <div data-cy='error-user' className="my-1 text-red-500  ">
                <span className="font-semibold">{formik.errors.data}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600  mb-2" htmlFor="password">
              Password
            </label>
            <input
              data-cy='password'
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.password && formik.errors.password && (
              <div data-cy='error-password' className="my-1 text-red-500  ">
                <span className="font-semibold">{formik.errors.password}</span>
              </div>
            )}
          </div>
          <input
            data-cy='submit'
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-full p-3 border rounded-full focus:outline-none text-white uppercase font-bold"
            value="Log in"
          />
        </form>
      </div>

      <div className="flex justify-center font-bold text-lg">
        <Link to="/signup">
          <span className="mr-2">No tienes una cuenta?</span>
          <span className="text-blue-500 hover:text-blue-600 focus:text-blue-600">
            Crea una
          </span>
        </Link>
      </div>
    </>
  );
};

export default Login;
