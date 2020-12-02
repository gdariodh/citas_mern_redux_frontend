import { useFormik } from "formik";
import * as Yup from "yup";
// redux
import { useDispatch } from "react-redux";
// actions redux
import { editDate } from "../actions/dateActions";
import { useSelector } from "react-redux";

const useDate = () => {
  const dispatch = useDispatch();

  const dateSelect = useSelector((state) => state.date.dateSelect);
  // extrae values de la nota seleccionada para el edit
  const { name, client, date, hour, description, category, _id } = dateSelect;
  // console.log(dateSelect);

  // pasamos los values a los initialValues para que se plasme en el formulario de EditDate como "value"
  const formik = useFormik({
    initialValues: {
      name: name ? name : "",
      client: client ? client : "",
      date: date ? date : "",
      hour: hour ? hour : "",
      description: description ? description : "",
      category: category ? category : "",
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
      // console.log(values)
      dispatch(editDate(values, _id));
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
