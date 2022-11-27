import { useEffect } from "react";
import {
  AiOutlineCar,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormDescription, FormWrapper } from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";
import { UserFormData } from "./types";
import { initialValues, userSchema } from "./constants";
import { normalizeCNH } from "utils/form/masks";

const FormSignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<UserFormData>({
    resolver: yupResolver(userSchema),
    defaultValues: initialValues
  });

  const cnhValue = watch("cnh");

  const onSubmit = (values: UserFormData) => {
    console.log("OPAA", values);
  };

  useEffect(() => {
    setValue("cnh", normalizeCNH(cnhValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cnhValue]);

  return (
    <FormWrapper>
      <FormDescription>
        Faça seu cadastro de forma rápida e fácil.
      </FormDescription>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="name"
          name="name"
          placeholder="Nome"
          label="Nome"
          labelFor="name"
          register={register}
          formValue={watch("name")}
          error={errors.name?.message}
          icon={<AiOutlineUser />}
        />
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
          id="cnh"
          name="cnh"
          placeholder="CNH"
          label="CNH"
          labelFor="cnh"
          register={register}
          formValue={cnhValue}
          error={errors.cnh?.message}
          icon={<AiOutlineCar />}
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

        <TextField
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirmar senha"
          label="Confirmar senha"
          labelFor="confirmPassword"
          type="password"
          register={register}
          formValue={watch("confirmPassword")}
          error={errors.confirmPassword?.message}
          icon={<AiOutlineLock />}
        />
        <Button size="small" type="submit" fullWidth>
          Cadastrar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
