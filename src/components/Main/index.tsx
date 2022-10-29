import * as S from "./styles";

const Main = ({
  title = "CRA Boilerplate",
  description = "TypeScript, ReactJS e Styled Components"
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default Main;
