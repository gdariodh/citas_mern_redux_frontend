import { useFormik } from "formik";
import * as Yup from "yup";
// redux
import { useDispatch } from "react-redux";
// actions redux
import { createDate } from "../actions/dateActions";

const useDate = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      client: "",
      date: "",
      hour: "",
      description: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El titulo es obligatorio"),
      client: Yup.string().required("Agrega un cliente"),
      date: Yup.string().required("Debes asignar una fecha a la cita"),
      hour: Yup.string().required("Asigna una hora"),
      description: Yup.string().required("¿De qué trata la cita?"),
      category: Yup.string().required("Añade una categoria"),
    }),
    onSubmit: (values) => {
      dispatch(createDate(values));
    },
  });

  const { handleChange, handleSubmit, handleBlur, values } = formik;

  return {
    formik,
    values,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useDate;
