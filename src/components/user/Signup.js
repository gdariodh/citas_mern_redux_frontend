import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// components
import Alert from "../alert/Alert";
// hook que lee los datos del formulario y que trabajara en conjunto con userAction redux
import useSignup from "../../hooks/useSignup";
// redux
import { useSelector } from "react-redux";

const SignUp = () => {
  const history = useHistory();

  // acceder state redux de user para luego usarlo en un useEffect para detectar cuando se registro y hacer redirect a /dates
  const userSignup = useSelector((state) => state.user.signup);

  useEffect(() => {
    // revisa cuando userSignup este true para hacer la redireccion, este solo es true cuando se crea el usuario con exito.
    if (userSignup) setTimeout(() => history.push("/dates"), 2000);
    // eslint-disable-next-line
  }, [userSignup]);

  // custom hook - lee datos
  const {
    formik,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useSignup();

  // extraer los initialvalues de formik que definimos
  const { username, name, email, password, repassword } = values;

  return (
    <>
      <h2 className="text-center text-3xl font-bold mt-4">Sign Up</h2>
      <Alert data-cy='alert' />
      <div className="flex justify-center mt-2 container mx-auto">
        <form
          data-cy="form"
          onSubmit={handleSubmit}
          className="w-full md:w-5/12 px-8 py-6"
        >
          <div className=" mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="username">
              Nombre de usuario
            </label>
            <input
              data-cy="user"
              value={username}
              onChange={handleChange}
              onBlur={handleBlur}
              type="username"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.username && formik.errors.email && (
              <div data-cy="error-user" className="my-1 text-red-500">
                <span className="font-semibold">{formik.errors.username}</span>
              </div>
            )}
          </div>

          <div className=" mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              data-cy="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="name"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.name && formik.errors.name && (
              <div data-cy="error-name" className="my-1 text-red-500">
                <span className="font-semibold">{formik.errors.name}</span>
              </div>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email
            </label>
            <input
              data-cy="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.email && formik.errors.email && (
              <div data-cy="error-email" className="my-1 text-red-500   ">
                <span className="font-semibold">{formik.errors.email}</span>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600  mb-2" htmlFor="password">
              Password
            </label>
            <input
              data-cy="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.password && formik.errors.password && (
              <div data-cy="error-password" className="my-1 text-red-500  ">
                <span className="font-semibold">{formik.errors.password}</span>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600  mb-2" htmlFor="repassword">
              Confimar el password
            </label>
            <input
              data-cy="re-password"
              value={repassword}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              id="repassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
            {formik.touched.repassword && formik.errors.repassword && (
              <div data-cy="error-re-password" className="my-1 text-red-500  ">
                <span className="font-semibold">
                  {formik.errors.repassword}
                </span>
              </div>
            )}
          </div>
          <input
            data-cy="submit"
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-full p-3 border rounded-full focus:outline-none text-white uppercase font-bold"
            value="sign up"
          />
        </form>
      </div>

      <div className="flex justify-center font-bold text-lg">
        <Link to="/login">
          <span className="mr-2">Ya tienes una cuenta?</span>
          <span className="text-blue-500 hover:text-blue-600 focus:text-blue-600">
            Login
          </span>
        </Link>
      </div>

      <Link to="/login">
        <img
          data-cy="img"
          className="h-24 mx-auto mt-6 xl:mt-3 lg:mt-14"
          src="https://www.flaticon.es/svg/static/icons/svg/3400/3400463.svg"
          alt="icon sign up"
        />
      </Link>
    </>
  );
};

export default SignUp;
