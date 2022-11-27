import {
  AiOutlineCar,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser
} from "react-icons/ai";
import { FormDescription, FormWrapper } from "components/Form";
import TextField from "components/TextField";
import Button from "components/Button";

const FormSignUp = () => {
  return (
    <FormWrapper>
      <FormDescription>
        Faça seu cadastro de forma rápida e fácil.
      </FormDescription>

      <form>
        <TextField
          id="name"
          name="name"
          placeholder="Nome"
          label="Nome"
          labelFor="name"
          icon={<AiOutlineUser />}
        />
        <TextField
          id="email"
          name="email"
          placeholder="E-mail"
          label="E-mail"
          labelFor="email"
          type="email"
          icon={<AiOutlineMail />}
        />
        <TextField
          id="cnh"
          name="cnh"
          placeholder="CNH"
          label="CNH"
          labelFor="cnh"
          icon={<AiOutlineCar />}
        />
        <TextField
          id="password"
          name="password"
          placeholder="Senha"
          label="Senha"
          labelFor="password"
          type="password"
          icon={<AiOutlineLock />}
        />

        <TextField
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirmar senha"
          label="Confirmar senha"
          labelFor="confirm-password"
          type="password"
          icon={<AiOutlineLock />}
        />

        <Button size="small" fullWidth>
          Cadastrar
        </Button>
      </form>
    </FormWrapper>
  );
};

export default FormSignUp;
