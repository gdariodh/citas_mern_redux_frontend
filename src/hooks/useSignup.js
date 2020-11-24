import { useFormik } from "formik";
import * as Yup from "yup";
// redux
import { useDispatch } from "react-redux";
// actions redux
import { signUp } from "../actions/userActions";

const useSignup = () => {
  // llamamos al useDispatch para poder acceder al action que se llevara los datos del formulario.
  const dispatch = useDispatch();

  // validaciones
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      repassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("El nombre de usuario es obligatorio"),
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("Email no valido")
        .required("Email es obligatorio"),
      password: Yup.string()
        .required("El password es obligatorio")
        .min(8, "Debe tener al menos 8 caracteres"),
      // validar que los dos password sean iguales con yup
      repassword: Yup.string()
        .oneOf(
          [Yup.ref("password"), null],
          "Los dos passwords deben ser iguales"
        )
        .required("La confirmacion de password es obligatoria"),
    }),
    onSubmit: (values) => {
      //console.log(values) - pasamos los values al action signUp, para poder pasarlo tienes que llamar dispatch(action())
      dispatch(signUp(values));
    },
  });

  // extraemos funciones que leeran lo que se ingresa
  const { handleChange, handleSubmit, handleBlur, values } = formik;

  return {
    formik,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useSignup;
