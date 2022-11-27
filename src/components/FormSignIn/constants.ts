import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido!")
    .required("E-mail obrigatório!"),
  password: yup.string().required("Senha obrigatória!")
});

export const initialValues = {
  email: "",
  password: ""
};
