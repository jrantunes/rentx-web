import HeaderUser from "components/HeaderUser";
import Heading from "components/Heading";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderContent>
        <Heading color="gray700" size="small">
          Perfil
        </Heading>
        <HeaderUser />
      </S.HeaderContent>
    </S.Wrapper>
  );
};

export default Header;
