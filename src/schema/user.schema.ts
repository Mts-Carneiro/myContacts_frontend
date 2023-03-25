import * as yup from "yup";

export const userSherma = yup.object().shape({
  name: yup
    .string()
    .required("É necessario inserir o nome do cliente!"),
  email: yup
    .string()
    .required("É necessario inserir o email do cliente!"),
  phone: yup
    .string().length(9)
    .required("É necessario inserir o contato do cliente!"),
});
export const contactSherma = yup.object().shape({
  name: yup
    .string()
    .required("É necessario inserir o nome do contato!"),
  email: yup
    .string()
    .required("É necessario inserir o email do contato!"),
  phone: yup
    .string().length(9)
    .required("É necessario inserir o contato do contato!"),
});