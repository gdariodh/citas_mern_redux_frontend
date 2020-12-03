import { useHistory, Link } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const signUp = () => history.push("/signup");
  const login = () => history.push("/login");

  return (
    <div className="flex md:flex-row flex-col">
      <div className="bg-gradient-to-t from-blue-300 to-blue-400 py-28 md:h-screen w-full flex items-center justify-center h-full order-1 md:order-none">
        {/** TODO: BANNER */}
        <Link to="/">
          <img
            className="h-48 animate__animated animate__fadeInDown"
            src="https://www.flaticon.es/svg/static/icons/svg/2026/2026519.svg"
            alt="icon home"
          />
        </Link>
      </div>
      <div className="flex w-full justify-center lg:px-44 md:px-16 xl:py-32 md:p-32 py-24 flex-wrap">
        {/** TODO: Botones de formulario de login y signup */}
        <div>
          <p className="text-2xl xl:text-3xl md:text-4xl md:text-center font-bold text-center xl:text-left">
            <span className="text-blue-500">{`<`}</span> Administra tus citas de
            la manera mas friendly desde ahora{" "}
            <span className="text-blue-700">{`>`}</span>
          </p>
        </div>

        <div className="flex flex-wrap w-full xl:mt-4 mt-10 md:mt-0">
          <h1 className="text-sm font-bold text-gray-800 pt-6 mx-auto md:m-0 order-1 md:order-none">
            Citas Mern - Redux
          </h1>
          {/** focus:outline-none es para quitar los border negros cuando le dan click al boton */}
          <button
            onClick={() => signUp()}
            className="w-full bg-blue-500 hover:bg-blue-600 focus:outline-none  mb-4 p-4  md:p-1 border rounded-full"
          >
            <span className="font-bold text-white md:text-2xl">Sign up</span>
          </button>

          <button
            onClick={() => login()}
            className="w-full hover:bg-blue-50 p-4 border border-blue-500 focus:outline-none md:p-1	 rounded-full"
          >
            <span className="font-bold text-blue-500 md:text-2xl ">Log in</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
