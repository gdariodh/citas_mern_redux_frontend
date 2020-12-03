// Routing
import { Route, Switch } from "react-router-dom";
// Children components
import Home from "../components/layout/Home";
import SignUp from "../components/user/Signup";
import Login from "../components/user/Login";
import ListDates from "../components/date/ListDates";
import CreateDate from "../components/date/CreateDate";
import EditDate from "../components/date/EditDate";
import DateView from "../components/date/DateView";
import DatesCategory from "../components/date/filters/category/DatesCategory";
import ListDatesFav from "../components/date/filters/favorite/ListDatesFav";

const Index = () => {
  return (
    <>
      {/** TODO: Rutas */}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dates" component={ListDates} />
        <Route exact path="/create-date" component={CreateDate} />
        <Route exact path="/date" component={DateView} />
        <Route exact path="/edit-date" component={EditDate} />
        <Route exact path="/dates-category" component={DatesCategory} />
        <Route exact path="/dates-favs" component={ListDatesFav} />
        <Route paht="/" component={Home} />
      </Switch>
    </>
  );
};

export default Index;
