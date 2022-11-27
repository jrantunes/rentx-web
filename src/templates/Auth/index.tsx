import CarIllustration from "components/CarIllustration";

import * as S from "./styles";

import carDefaultIllustration from "assets/background-car1.png";
import Heading from "components/Heading";
import { ReactNode } from "react";

export type AuthProps = {
  illustrationPosition?: "left" | "right";
  carImage?: string;
  title: string;
  children: ReactNode;
};

const Auth = ({
  title,
  children,
  // illustrationPosition = "right",
  carImage = carDefaultIllustration
}: AuthProps) => {
  return (
    <S.Wrapper>
      <CarIllustration
        backgroundElementColor="gray700"
        backgroundElementOpacity="50%"
        absoluteImageURL={carImage}
        absoluteImageAltText="Imagem de um carro vermelho centralizada verticalmente e acima de elementos retangulares"
      />
      <S.FormContainer>
        <Heading color="gray700">{title}</Heading>
        {children}
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default Auth;
