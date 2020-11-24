// TODO: cada reducer tiene su propio state

// types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_SUCCESS,
  AUTH_ERROR,
  HIDE_ALERT,
} from "../types";

const initialState = {
  alert: false,
  error: false,
  alertMsg: "",
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        alertMsg: action.payload.msg,
        alert:true,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        error: true,
        alertMsg: action.payload,
        alert:true
      };

    case HIDE_ALERT:
      return {
        ...state,
        alert: false,
        error: false,
        alertMsg: "",
      };

    default:
      return state;
  }
}
