import FormSignUp from "components/FormSignUp";
import Auth from "templates/Auth";

const Register = () => {
  return (
    <Auth title="Crie sua conta">
      <FormSignUp />
    </Auth>
  );
};

export default Register;
