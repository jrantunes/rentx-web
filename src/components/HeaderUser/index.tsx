import Heading from "components/Heading";
import { AiOutlineUser } from "react-icons/ai";

import * as S from "./styles";

type HeaderUserProps = {
  userName?: string;
  userImageUrl?: string;
};

const HeaderUser = ({ userName = "", userImageUrl = "" }: HeaderUserProps) => {
  return (
    <S.Wrapper>
      <Heading size="xsmall" color="gray700">
        {userName || "Faça login"}
      </Heading>
      <S.ImageContainer>
        {userImageUrl ? (
          <img
            src={userImageUrl}
            alt={`Imagem de Perfil do Usuário ${userName}`}
          />
        ) : (
          <AiOutlineUser />
        )}
      </S.ImageContainer>
    </S.Wrapper>
  );
};

export default HeaderUser;
