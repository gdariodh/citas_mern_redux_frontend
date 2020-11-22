import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <>
      <Link to="/">
        <img
          className="h-24 mx-auto mt-6 xl:mt-3 md:mt-32"
          src="https://www.flaticon.es/svg/static/icons/svg/3400/3400463.svg"
          alt="icon sign up"
        />
      </Link>

      <h2 className="text-center text-3xl font-bold">Sign Up</h2>
      <div className="flex justify-center xl:mt-2 container mx-auto">
        <form className="bg-white w-full md:w-5/12 px-8 pt-6 pb-8 mb-1">
          <div className=" mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="username">
              Nombre de usuario
            </label>
            <input
              type="username"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
          </div>

          <div className=" mb-4">
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="name"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600  mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600  mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600  mb-2" htmlFor="repassword">
              Repetir password
            </label>
            <input
              type="repassword"
              id="repassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 focus:shadow-outline"
            />
          </div>
          <input
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
    </>
  );
};

export default SignUp;
