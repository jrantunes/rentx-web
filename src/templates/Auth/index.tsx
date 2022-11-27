import CarIllustration from "components/CarIllustration";

import * as S from "./styles";

import carDefaultIllustration from "assets/background-car1.png";
import Heading from "components/Heading";
import { ReactNode } from "react";

export type AuthProps = {
  illustrationPosition?: "left" | "right";
  carImage?: string;
  carImageAltText?: string;
  title: string;
  children: ReactNode;
};

const Auth = ({
  title,
  children,
  illustrationPosition = "right",
  carImage = carDefaultIllustration,
  carImageAltText = "Imagem de um carro vermelho centralizada verticalmente e acima de elementos retangulares"
}: AuthProps) => {
  return (
    <S.Wrapper illustrationPosition={illustrationPosition}>
      <CarIllustration
        backgroundElementColor="gray700"
        backgroundElementOpacity="50%"
        absoluteImageURL={carImage}
        absoluteImageAltText={carImageAltText}
      />
      <S.FormContainer illustrationPosition={illustrationPosition}>
        <Heading color="gray700">{title}</Heading>
        {children}
      </S.FormContainer>
    </S.Wrapper>
  );
};

export default Auth;
