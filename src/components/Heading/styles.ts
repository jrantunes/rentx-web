import styled, { css, DefaultTheme } from "styled-components";
import { HeadingProps } from ".";

type WrapperProps = Omit<HeadingProps, "children">;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `
};

export const Wrapper = styled.h2<WrapperProps>`
  ${({ theme, color, align, size }) => css`
    color: ${theme.colors[color!]};
    font-family: ${theme.font.archivo};
    font-weight: ${theme.font.bold};
    text-align: ${align};

    ${!!size && wrapperModifiers[size!](theme)}
  `}
`;
