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
  DATES_LIKES_ERROR,
  DATES_DISLIKES_SUCCESS,
  DATES_DISLIKES_ERROR,
  GET_DATES_LIKES_SUCCESS,
  GET_DATES_LIKES_ERROR,
  HIDE_ALERT,
} from "../types";

import clientAxios from "../configAxios/clientAxios";

// TODO: Crud de las citas

export function createDate(data) {
  return async (dispatch) => {
    //console.log(data)
    try {
      const res = await clientAxios.post("/api/dates", data);
      dispatch(createDateSuccess(res.data));
    } catch (error) {
      console.log(error);
      console.log(createDateError(error.response.data.msg));
    }
    setTimeout(() => {
      dispatch(hideAlert());
    }, 1000);
  };
}

const createDateSuccess = (data) => ({
  type: CREATE_DATE_SUCCESS,
  payload: data,
});

const createDateError = (data) => ({
  type: CREATE_DATE_ERROR,
  payload: data,
});

export function getDates() {
  return async (dispatch) => {
    try {
      const res = await clientAxios("/api/dates");
      dispatch(listDates(res.data.dates));
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
      dispatch(listDatesError(error.response.data.msg));
    }
  };
}

// children action de getDates
const listDates = (data) => ({
  type: GET_DATES_SUCCESS,
  payload: data,
});

const listDatesError = (data) => ({
  type: GET_DATES_ERROR,
  payload: data,
});

// selecciona la cita a editar -> y la data se utiliza en el hook useEditDate como initialValues
// tambien se reutiliza cuando se da click a "Ver mas"
export function selectDate(data) {
  return (dispatch) => {
    dispatch({
      type: SELECT_DATE,
      payload: data,
    });
  };
}

export function editDate(data, dateId) {
  return async (dispatch) => {
    // console.log(data)
    // console.log(dateId)
    try {
      const res = await clientAxios.put(`/api/dates/${dateId}`, data);
      dispatch(editDateSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(editDateError(error.response.data.msg));
    }

    setTimeout(() => {
      dispatch(hideAlert());
    }, 1000);
  };
}

// childrens action
const editDateSuccess = (data) => ({
  type: EDIT_DATE_SUCCESS,
  payload: data,
});

const editDateError = (data) => ({
  type: EDIT_DATA_ERROR,
  payload: data,
});

export function deleteDate(dateId) {
  return async (dispatch) => {
    // console.log("eliminando...");
    // console.log(dateId);
    try {
      await clientAxios.delete(`/api/dates/${dateId}`);
      dispatch(deleteDateSuccess(dateId));
    } catch (error) {
      console.log(error);
      dispatch(deleteDateError(error.response.data.msg));
    }
    setTimeout(() => {
      dispatch(hideAlert());
    }, 1000);
  };
}

const deleteDateSuccess = (data) => ({
  type: DELETE_DATE_SUCCESS,
  payload: data,
});

const deleteDateError = (data) => ({
  type: DELETE_DATE_ERROR,
  payload: data,
});

// TODO: Filtros de las citas
export function getDatesByCategory(data) {
  return async (dispatch) => {
    if (data === "") return;
    //console.log(data);
    try {
      const res = await clientAxios(`/api/dates-filter/category/${data}`);
      dispatch(datesByCategorySuccess(res.data.dates));
    } catch (error) {
      console.log(error);
      dispatch(datesByCategoryError(error.response.data.msg));
    }
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

const datesByCategorySuccess = (data) => ({
  type: DATES_FILTER_SUCCESS,
  payload: data,
});

const datesByCategoryError = (data) => ({
  type: DATES_FILTER_ERROR,
  payload: data,
});

// TODO: Likes
export function handleLikes(data) {
  return async (dispatch) => {
    //console.log(data);
    try {
      await clientAxios.post(`/api/dates-filter/likes/${data._id}`);
      // agregamos el id para que lo el reducer haga un filter
      dispatch(handleLikesSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

// children actions
const handleLikesSuccess = (data) => ({
  type: DATES_LIKES_SUCCESS,
  payload: data,
});

const handleLikesError = (data) => ({});

export function handleDislikes(data) {
  console.log(data);
  return async (dispatch) => {
    try {
      await clientAxios.delete(`/api/dates-filter/likes/${data._id}`);
      // agregamos el id para que lo el reducer haga un map de los datesFavs que no tengan ese id
      dispatch(handleDislikesSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
}

const handleDislikesSuccess = (data) => ({
  type: DATES_DISLIKES_SUCCESS,
  payload: data,
});

const handleDislikesError = (data) => ({});

export function getDatesFavs() {
  return async (dispatch) => {
    try {
      const res = await clientAxios("/api/dates-filter/likes");
      dispatch(getFavSuccess(res.data.dates));
    } catch (error) {
      console.log(error);
      dispatch(getFavError(error.response.data.msg));
    }
  };
}

const getFavSuccess = (data) => ({
  type: GET_DATES_LIKES_SUCCESS,
  payload: data,
});

const getFavError = (data) => ({
  type: GET_DATES_LIKES_ERROR,
  payload: data,
});

// TODO: ACTION REUTILIZABLE para ocultar las alertas plasmadas cuando hay mensaje para el usuario
const hideAlert = () => ({
  type: HIDE_ALERT,
});
