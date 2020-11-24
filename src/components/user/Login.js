import { Link } from "react-router-dom";
// hook que lee los datos del formulario y que trabajara en conjunto con userAction redux
import useLogin from "../../hooks/useLogin";
// alert component
import Alert from "../alert/Alert";

const Login = () => {
  // custom hook - lee datos
  const { formik, values, handleChange, handleSubmit, handleBlur } = useLogin();

  // extraer los initialvalues de formik que definimos
  const { data, password } = values;
  return (
    <>
      <img
        className="h-24 mx-auto mt-6 xl:mt-3 md:mt-32"
        src="https://www.flaticon.es/svg/static/icons/svg/3768/3768079.svg"
        alt="icon login"
      />
     
      <h2 className="text-center text-3xl font-bold">Log in</h2>
      <Alert />
      <div className="flex justify-center mt-2 container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full md:w-5/12 px-8 py-6"
        >
          <div className=" mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="data">
              Email o usuario
            </label>
            {/** TODO: el htmlFor, id y values de los inputs se llaman data porque se ingresa un correo o un usuario */}
            <input
              value={data}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              id="data"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.data && formik.errors.data && (
              <div className="my-1 text-red-500  ">
                <span className="font-semibold">{formik.errors.data}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600  mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="my-1 text-red-500  ">
                <span className="font-semibold">{formik.errors.password}</span>
              </div>
            )}
          </div>
          <input
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
