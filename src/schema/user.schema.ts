import * as yup from "yup";

export const userSherma = yup.object().shape({
  client_name: yup
    .string()
    .required("É necessario inserir o nome do cliente!"),
  client_email: yup
    .string()
    .required("É necessario inserir o nome do cliente!"),
  clinte_phone: yup
    .string()
    .required("É necessario inserir o nome do cliente!"),
});