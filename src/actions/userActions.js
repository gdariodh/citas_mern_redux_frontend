// types - deben estar relacionados los types de reducer con los de actions
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  HIDE_ALERT,
  LOGOUT,
  CLEAR_STATE,
} from "../types";
// axios con url base del backend
import clientAxios from "../configAxios/clientAxios";
// helper, agrega token a las cabeceras del clientAxios
import setTokenAxios from "../configAxios/setTokenAxios";

// primer action se encarga de los actions cuando se crea una cuenta
export function signUp(data) {
  return async (dispatch) => {
    //console.log(data);
    // los dispatch invocan a los actions hijos que alteran el state con el reducer con los types.
    try {
      const res = await clientAxios.post("/api/user", data);
      dispatch(createUser(res.data));
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

// TODO: segundo action se encarga de los actions del login
export function login(data) {
  return async (dispatch) => {
    try {
      const res = await clientAxios.post("/api/auth", data);
      dispatch(loginUserSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(loginUserError(error.response.data.msg));
    }
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

// children actions de login action
const loginUserSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const loginUserError = (data) => ({
  type: LOGIN_ERROR,
  payload: data,
});

/* Tercer action que se encarga de autenticar el usuario en la app, mediante su token que esta en localStorage
 */
export function userAuth() {
  return async (dispatch) => {
    // helper que agrega el token del localStorage a las cabeceras del clientAxios
    setTokenAxios();
    // endpoint que verifica el token, y si es valido retorna el objeto del usuario autenticado
    try {
      // en esta parte ya el token esta en las cabeceras del clientAxios
      const res = await clientAxios("/api/auth");
      dispatch(userAuthSuccess(res.data.user));
    } catch (error) {
      console.log(error);
      dispatch(userAuthError(error.response.data.msg));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 4000);
    }
  };
}

const userAuthSuccess = (data) => ({
  type: AUTH_SUCCESS,
  payload: data,
});

const userAuthError = (data) => ({
  type: AUTH_ERROR,
  payload: data,
});

export function logOut() {
  return (dispatch) => {
    dispatch(logoutSuccess());
  };
}

const logoutSuccess = () => ({
  type: LOGOUT,
});

export function clearState() {
  return (dispatch) => {
    dispatch(clearStateSuccess());
  };
}

const clearStateSuccess = () => ({
  type: CLEAR_STATE,
});

/* TODO: Los actions son las funciones que se utilizan en la interfaz, los actions se dividen en dos, el action principal que manda a lanzar el dispatch
, y ese dispatch invoca un action hijo que contiene los types y es el que altera el state con el reducer.
 Pueden haber multiples actions principales y multiples actions hijos que alteran el state.
*/
