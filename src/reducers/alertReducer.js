// TODO: cada reducer tiene su propio state

// types
import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  AUTH_ERROR,
  HIDE_ALERT,
  CREATE_DATE_SUCCESS,
  CREATE_DATE_ERROR,
  GET_DATES_ERROR,
  EDIT_DATE_SUCCESS,
  EDIT_DATA_ERROR,
  DELETE_DATE_ERROR,
  DATES_FILTER_ERROR,
  DATES_LIKES_ERROR,
  DATES_DISLIKES_ERROR,
  GET_DATES_SUCCESS,
  GET_DATES_LIKES_ERROR,
  CLEAR_STATE,
} from "../types";

const initialState = {
  alert: false,
  error: false,
  alertMsg: "",
  alertFav: false,
  alertMsgFav: "",
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
    case CREATE_DATE_SUCCESS:
    case EDIT_DATE_SUCCESS:
      return {
        ...state,
        alertMsg: action.payload.msg,
        alert: true,
      };

    case GET_DATES_SUCCESS:
      return {
        alertFav: false,
        alertMsgFav: "",
      };

    case SIGNUP_ERROR:
    case LOGIN_ERROR:
    case AUTH_ERROR:
    case GET_DATES_ERROR:
    case CREATE_DATE_ERROR:
    case EDIT_DATA_ERROR:
    case DELETE_DATE_ERROR:
    case DATES_FILTER_ERROR:
      return {
        ...state,
        error: true,
        alertMsg: action.payload,
        alert: true,
      };

    case GET_DATES_LIKES_ERROR:
      return {
        alertFav: true,
        alertMsgFav: action.payload,
      };

    case HIDE_ALERT:
      return {
        ...state,
        alert: false,
        error: false,
        alertMsg: "",
      };

    case CLEAR_STATE:
      return {
        ...state,
        alert: false,
        error: false,
        alertMsg: "",
        alertFav: false,
        alertMsgFav: "",
      };

    default:
      return state;
  }
}
