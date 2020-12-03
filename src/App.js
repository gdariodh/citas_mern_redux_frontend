import { useEffect } from "react";
// routing
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
// redux
import { Provider } from "react-redux"; // hace disponible redux en toda la app
import store from "./store";
// store contiene la config de redux dev tools y index reducer, reducer principal.
import setTokenAxios from "./configAxios/setTokenAxios";
// fn que comprueba si hay un token en el localStorage y lo agrega en las cabeceras

function App() {
  useEffect(() => {
    setTokenAxios();
  }, []);

  return (
    <div className="bg-white h-screen">
      <Provider store={store}>
        <Router>
          {/** Componentes children, donde estara disponible el state redux y reducers */}
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
