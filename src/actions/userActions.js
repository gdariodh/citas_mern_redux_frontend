// types - deben estar relacionados los types de reducer con los de actions
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  HIDE_ALERT,
} from "../types";
// axios configurado con la url base del api backend
import clientAxios from "../configAxios/clientAxios";

// Los actions son las funciones que se utilizan en la interfaz.

/* TODO: Los actions se dividen en dos, el action principal que manda a lanzar el dispatch
, y ese dispatch invoca un action hijo que contiene los types y es el que altera el state con el reducer.
 Pueden haber multiples actions principales y multiples actions hijos que alteran el state.
*/

// primer action
export function signUp(data) {
  return async (dispatch) => {
    //console.log(data);
    // los dispatch invocan a los actions hijos que alteran el state con el reducer con los types.
    try {
      const res = await clientAxios.post("/api/user", data);
      // objeto que va al payload
      const userData = {
        token: res.data.token,
        msg: res.data.msg,
      };
      dispatch(createUser(userData));
    } catch (error) {
      console.log(error);
      dispatch(createUserError(error.response.data.msg));
    }
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

// children actions de signUp action
const createUser = (data) => ({
  type: SIGNUP_SUCCESS,
  payload: data,
});

const createUserError = (data) => ({
  type: SIGNUP_ERROR,
  payload: data,
});

// TODO: action children que sirve para reutilizar para ocultar la alerta.
const hideAlert = () => ({
  type: HIDE_ALERT,
});

// segundo action

// children actions del 2do action
