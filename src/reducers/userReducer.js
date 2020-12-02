// types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_STATE,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  signup: false,
  login: false,
  logout: false,
  auth: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        signup: true,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        login: true,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        auth: true,
      };

    case SIGNUP_ERROR:
    case LOGIN_ERROR:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        signup: false,
        login: false,
        logout: false,
        auth: false,
      };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        logout: true
      };

    case CLEAR_STATE:
      return {
        ...state,
        token: null,
        signup: false,
        login: false,
        auth: false,
        user: null,
        logout: false,
      };

    default:
      return state;
  }
}
