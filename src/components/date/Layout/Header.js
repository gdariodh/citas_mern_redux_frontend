import { Link, useHistory } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logOut, clearState } from "../../../actions/userActions";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();

  const logout = useSelector((state) => state.user.logout);
  const history = useHistory();

  useEffect(() => {
    if (logout) {
      history.push("/");
      dispatch(clearState());
    }
  }, [logout]);

  return (
    <>
      {/** TODO: header */}
      <header className=" bg-white border-b md:border-l border-gray-300  p-3 flex justify-between items-center">
        <Link to="/dates">
          <span className="text-xl font-bold">Citas</span>
        </Link>
        <button
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
