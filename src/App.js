// Routing
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
// TODO: Redux
import { Provider } from "react-redux"; // hace disponible redux en toda la app
import store from "./store";
// store contiene la config de redux dev tools y index reducer, reducer principal.

function App() {
  return (
    <div className="bg-white h-screen">
      <Provider store={store}>
        <Router>
          {/**TODO: Si los actions del redux hacen redirect poner dentro de Router */}

          {/** Componentes children, donde estara disponible el state central y reducers */}
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
