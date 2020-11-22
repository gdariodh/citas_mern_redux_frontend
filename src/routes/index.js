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

const Index = () => {
  return (
    <>
      {/** Rutas de la app */}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        {/** TODO: Cita */}
        <Route exact path="/dates" component={ListDates} />
        <Route exact path="/create-date" component={CreateDate} />
        <Route exact path="/edit-date" component={EditDate} />
        {/** TODO: Ruta por defecto */}
        <Route paht="/" component={Home} />
      </Switch>
    </>
  );
};

export default Index;
