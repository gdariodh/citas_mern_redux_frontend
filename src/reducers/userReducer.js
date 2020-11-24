// types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
} from "../types";

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  signup:false,
  login:false,
  auth: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        signup: true
      };

    case SIGNUP_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        signup: false
      };

    default:
      return state;
  }
}
