import clientAxios from "./clientAxios";

const setToken = () => {
  // console.log("obteniendo el token");
  const token = localStorage.getItem("token");
  if (token) {
    clientAxios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete clientAxios.defaults.headers.common["Authorization"];
  }
};

export default setToken;

/* TODO: Helper que extrae el token del localStorage para agregarlo en las cabeceras del clienteAxios
 */
