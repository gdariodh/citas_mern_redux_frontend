import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    // codigo mejorado para que la app se ejecute, sin tener redux dev tools
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? // si existe la extension redux dev tools, habilitar el uso de redux dev tools
        window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
    // sino f para permitir que la app cargue en cualquier navegador que no tenga redux dev tools
  )
);

export default store;
