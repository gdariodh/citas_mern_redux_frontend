// Routing
import { Route, Switch } from "react-router-dom";
// Childrens
import Home from "../components/layout/Home";
// Componentes de usuario
import SignUp from "../components/user/Signup";
import Login from "../components/user/Login";
// Componentes de citas
import ListDates from "../components/date/ListDates";
import CreateDate from "../components/date/CreateDate";
import EditDate from "../components/date/EditDate";
// Filtros de citas
import DatesCategory from "../components/date/filters/category/DatesCategory";
import ListDatesFav from "../components/date/filters/favorite/ListDatesFav";
// proteger rutas al cargar la app
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Error401 from "../components/alert/Error401";
import { userAuth } from "../actions/userActions";

const Index = () => {
  // FIXME: HACER LA AUTH GENERAL
  const dispatch = useDispatch();
  const history = useHistory();
  // state
  const userState = useSelector((state) => state.user);
  const { auth, user, logout } = userState;

  return (
    <>
      {/** Rutas de la app */}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />

        {/** TODO: Proteccion de rutas */}
        <Route exact path="/dates" component={ListDates} />

        <Route exact path="/create-date" component={CreateDate} />
        <Route exact path="/edit-date" component={EditDate} />
        <Route exact path="/dates-category" component={DatesCategory} />
        <Route exact path="/dates-favs" component={ListDatesFav} />

        {/** TODO: Ruta por defecto */}
        <Route paht="/" component={Home} />
      </Switch>
    </>
  );
};

export default Index;
