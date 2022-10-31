import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ElementType,
  ReactNode
} from "react";
import * as S from "./styles";

type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  color?: "red" | "black" | "green";
  fullWidth?: boolean;
  icon?: JSX.Element;
  as?: ElementType;
} & ButtonTypes;

const Button = ({
  children,
  size = "medium",
  color = "red",
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      color={color}
      hasIcon={!!icon}
      {...props}
    >
      {icon}
      {!!children && <span>{children}</span>}
    </S.Wrapper>
  );
};

export default Button;
