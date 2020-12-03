// types
import {
  CREATE_DATE_SUCCESS,
  CREATE_DATE_ERROR,
  GET_DATES_SUCCESS,
  GET_DATES_ERROR,
  SELECT_DATE,
  EDIT_DATE_SUCCESS,
  EDIT_DATA_ERROR,
  DELETE_DATE_SUCCESS,
  DELETE_DATE_ERROR,
  DATES_FILTER_SUCCESS,
  DATES_FILTER_ERROR,
  DATES_LIKES_SUCCESS,
  DATES_DISLIKES_SUCCESS,
  DATES_DISLIKES_ERROR,
  GET_DATES_LIKES_SUCCESS,
  GET_DATES_LIKES_ERROR,
  CLEAR_STATE,
} from "../types";

const initialState = {
  dates: [],
  redirect: false,
  reload: false,
  dateSelect: {},
  favs: [],
  datesFavs: [],
  datesCategory: [],
};

export default function dateReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DATE_SUCCESS:
      return {
        ...state,
        dates: [action.payload.date, ...state.dates],
        redirect: true,
      };

    case GET_DATES_SUCCESS:
      return {
        ...state,
        dates: action.payload,
        redirect: false,
        reload: false,
        datesCategory: [],
      };

    case SELECT_DATE:
      return {
        ...state,
        dateSelect: action.payload,
      };

    case EDIT_DATE_SUCCESS:
      return {
        ...state,
        dateSelect: {},
        dates: state.dates.map((date) =>
          date._id === action.payload.date._id ? action.payload.date : date
        ),
        redirect: true,
      };

    case DELETE_DATE_SUCCESS:
      return {
        ...state,
        dates: state.dates.filter((date) => date._id !== action.payload),
        reload: true,
      };

    case DATES_FILTER_SUCCESS:
      return {
        ...state,
        datesCategory: action.payload,
        reload: true,
      };

    case DATES_LIKES_SUCCESS:
      return {
        ...state,
        favs: [action.payload, ...state.favs],
        reload: true,
      };

    case DATES_DISLIKES_SUCCESS:
      return {
        ...state,
        favs: [state.favs.filter((date) => date._id !== action.payload._id)],
        datesFavs: [
          state.datesFavs.filter((date) => date._id !== action.payload._id),
        ],
        reload: true,
      };

    case GET_DATES_LIKES_SUCCESS:
      return {
        ...state,
        datesFavs: action.payload,
        reload: false,
      };

    case GET_DATES_ERROR:
    case CREATE_DATE_ERROR:
    case EDIT_DATA_ERROR:
    case DELETE_DATE_ERROR:
    case DATES_FILTER_ERROR:
    case DATES_DISLIKES_ERROR:
    case GET_DATES_LIKES_ERROR:
      return {
        ...state,
        dates: [],
        redirect: false,
        reload: false,
        dateSelect: {},
        datesFavs: [],
        favs: [],
        datesCategory: [],
      };

    case CLEAR_STATE:
      return {
        ...state,
        dates: [],
        reload: false,
        dateSelect: {},
        datesFavs: [],
        favs: [],
        datesCategory: [],
        redirect: false,
      };

    default:
      return state;
  }
}
