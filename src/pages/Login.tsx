import FormSignIn from "components/FormSignIn";
import Auth from "templates/Auth";

import whiteCarDefaultIllustration from "assets/background-car2.png";

const Login = () => {
  return (
    <Auth
      title="Estamos quase lá."
      illustrationPosition="left"
      carImage={whiteCarDefaultIllustration}
      carImageAltText="Imagem de um carro branco centralizada verticalmente e acima de elementos retangulares"
    >
      <FormSignIn />
    </Auth>
  );
};

export default Login;
