import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup
    .string()
    .email("Insira um e-mail válido!")
    .required("E-mail obrigatório!"),
  cnh: yup.string().required("CNH obrigatória!"),
  password: yup
    .string()
    .min(6, "No mínimo 6 caracteres!")
    .required("Senha obrigatória!"),
  confirmPassword: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais!")
});

export const initialValues = {
  name: "",
  email: "",
  cnh: "",
  password: "",
  confirmPassword: ""
};
