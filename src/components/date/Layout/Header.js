import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
// icons
import { HiOutlineLogout } from "react-icons/hi";
// redux
import { useDispatch, useSelector } from "react-redux";
import { logOut, clearState } from "../../../actions/userActions";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // acceder state redux
  const logout = useSelector((state) => state.user.logout);

  useEffect(() => {
    if (logout) {
      history.push("/");
      dispatch(clearState());
    }
    // eslint-disable-next-line
  }, [logout]);

  return (
    <>
      <header data-cy='header' className=" bg-white border-b md:border-l border-gray-300  p-3 flex justify-between items-center">
        <Link to="/dates">
          <span className="text-xl font-bold">Citas</span>
        </Link>
        <button
          data-cy='logout'
          onClick={() => dispatch(logOut())}
          className="flex focus:outline-none items-center mr-4"
        >
          <span className="text-blue-500 hover:text-blue-600 font-semibold mr-2 ">
            Log out{" "}
          </span>
          <HiOutlineLogout className="h-8 w-auto " />
        </button>
      </header>
    </>
  );
};

export default Header;
