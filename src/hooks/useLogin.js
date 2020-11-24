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
    // data porque se ingresa o un correo o un usuario
      data:"",
      password: "",
    },
    validationSchema: Yup.object({
      data: Yup.string().required('Debes ingresar un email o un usuario'),
      password: Yup.string()
        .required("El password es obligatorio")
        .min(8, "Debe tener al menos 8 caracteres")
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
