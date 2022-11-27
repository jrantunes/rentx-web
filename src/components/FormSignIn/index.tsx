import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import { FormDescription, FormWrapper } from "components/Form";
import TextField from "components/TextField";
import * as S from "./styles";
import Button from "components/Button";

const FormSignIn = () => {
  return (
    <FormWrapper>
      <FormDescription>
        Faça seu login para começar uma experiência incrível.
      </FormDescription>

      <form>
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
          id="password"
          name="password"
          placeholder="Senha"
          label="Senha"
          labelFor="password"
          type="password"
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
