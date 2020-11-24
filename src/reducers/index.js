// TODO: Reducer principal, contiene todos los reducers children. Y es el unico que va al store

// combina los reducers children
import { combineReducers } from "redux";
// reducers children
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
import dateReducer from "./dateReducer";

export default combineReducers({
  // nombre_reducer: reducer importado
  user: userReducer,
  alert: alertReducer,
  date: dateReducer,
});
