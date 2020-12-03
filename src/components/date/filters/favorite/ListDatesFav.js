import { useEffect } from "react";
// components
import DatePreview from "./DatePreview";
import Aside from "../../Layout/Aside";
import Header from "../../Layout/Header";
import Error401 from "../../../alert/Error401";
// redux
import { userAuth } from "../../../../actions/userActions";
import { getDatesFavs } from "../../../../actions/dateActions";
import { useDispatch, useSelector } from "react-redux";

const ListDates = () => {
  const dispatch = useDispatch();

  // acceder state redux
  const userState = useSelector((state) => state.user);
  const { auth, user, logout } = userState;
  const dateState = useSelector((state) => state.date);
  const { datesFavs, reload } = dateState;
  const alertState = useSelector((state) => state.alert);
  const { alertFav, alertMsgFav } = alertState;

  useEffect(() => {
    if (!logout && !auth && !user) dispatch(userAuth());
    if (auth || reload) dispatch(getDatesFavs());
    // eslint-disable-next-line
  }, [auth, reload]);

  return (
    <>
      {auth && user ? (
        <div className="flex md:flex-row flex-col ">
          <Aside fav />
          <div className="w-full bg-gradient-to-t from-blue-300 to-blue-400">
            <Header />
            <h2 className="text-white text-2xl md:text-3xl mt-4 font-bold text-center ">
              Favoritas
            </h2>
            {/** TODO: Listado citas favoritas */}
            <div className="flex pt-10 pb-32 md:py-0 flex-wrap md:justify-evenly md:px-6 ">
              {datesFavs.length !== 0 && !alertFav ? (
                datesFavs.map((date, i) => (
                  <DatePreview key={`${date._id}-${i}`} date={date} />
                ))
              ) : (
                <div className="py-20 md:py-24 mx-auto w-1/2 md:w-full">
                  <p className="text-white py-20 md:py-0 font-semibold text-2xl mx-auto text-center animate__animated animate__fadeInUp">
                    {alertMsgFav}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Error401 />
      )}
    </>
  );
};

export default ListDates;
