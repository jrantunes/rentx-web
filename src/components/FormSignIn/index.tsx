import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FormDescription, FormWrapper } from "components/Form";
import TextField from "components/TextField";
import * as S from "./styles";
import Button from "components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInFormData } from "./types";
import { initialValues, signInSchema } from "./constants";

const FormSignIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema),
    defaultValues: initialValues
  });

  const onSubmit = (values: SignInFormData) => {
    console.log("opa", values);
  };

  return (
    <FormWrapper>
      <FormDescription>
        Faça seu login para começar uma experiência incrível.
      </FormDescription>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          name="email"
          placeholder="E-mail"
          label="E-mail"
          labelFor="email"
          type="email"
          register={register}
          formValue={watch("email")}
          error={errors.email?.message}
          icon={<AiOutlineMail />}
        />
        <TextField
          id="password"
          name="password"
          placeholder="Senha"
          label="Senha"
          labelFor="password"
          type="password"
          register={register}
          formValue={watch("password")}
          error={errors.password?.message}
          icon={<AiOutlineLock />}
        />

        <S.FormLink href="#">Esqueci minha senha</S.FormLink>

        <Button size="small" fullWidth>
          Login
        </Button>
        <Button size="small" borderOnly fullWidth>
          Criar conta gratuita
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormSignIn;
