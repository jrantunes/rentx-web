import { ReactNode } from "react";
import * as S from "./styles";

export type HeadingProps = {
  children: ReactNode;
  color?: "white" | "gray700" | "primary";
  size?: "xsmall" | "small" | "medium" | "large";
  align?: "left" | "center" | "right";
};

const Heading = ({
  children,
  align = "left",
  color = "white",
  size = "medium"
}: HeadingProps) => {
  return (
    <S.Wrapper align={align} color={color} size={size}>
      {children}
    </S.Wrapper>
  );
};

export default Heading;
