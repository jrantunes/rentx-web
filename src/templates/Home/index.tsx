import Button from "components/Button";
import CarIllustration from "components/CarIllustration";
import { Container } from "components/Container";
import Heading from "components/Heading";
import Logo from "components/Logo";

import * as S from "./styles";

export type HomeProps = {
  absoluteImageURL: string;
  absoluteImageAltText: string;
};

const Home = ({ absoluteImageURL, absoluteImageAltText }: HomeProps) => {
  return (
    <S.Wrapper>
      <Container>
        <S.SectionPrimary>
          <Logo />
          <div>
            <Heading size="large">
              Alugue um carro de maneira simples e fácil
            </Heading>
            <p>
              Vários modelos para você dirigir seguro, com conforto e segurança.
            </p>
          </div>
          <Button>Começar agora</Button>
        </S.SectionPrimary>
        <CarIllustration
          absoluteImageURL={absoluteImageURL}
          absoluteImageAltText={absoluteImageAltText}
        />
      </Container>
    </S.Wrapper>
  );
};

export default Home;
