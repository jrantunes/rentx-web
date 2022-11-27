import { Outlet } from "react-router-dom";
import Header from "components/Header";

import * as S from "./styles";

const DefaultPage = () => {
  return (
    <S.Wrapper>
      <Header />
      <Outlet />
    </S.Wrapper>
  );
};

export default DefaultPage;
