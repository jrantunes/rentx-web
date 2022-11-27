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
  borderOnly?: boolean;
  icon?: JSX.Element;
  as?: ElementType;
} & ButtonTypes;

const Button = ({
  children,
  icon,
  size = "medium",
  color = "red",
  fullWidth = false,
  borderOnly = false,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      fullWidth={fullWidth}
      borderOnly={borderOnly}
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
