import styled, { css } from "styled-components";
import { LogoProps } from ".";

const wrapperModifiers = {
  normal: () => css`
    width: 20rem;
    height: 2.2rem;
  `,

  large: () => css`
    width: 30rem;
    height: 4.8rem;
  `,

  hideText: () => css`
    width: 4.8rem;
    height: 3.5rem;

    svg {
      height: 3.5rem;
      pointer-events: none;
    }

    .text {
      display: none;
    }

    .logo-x {
      transform: translateX(-83%);
    }
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideText }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifiers[size]}
    ${hideText && wrapperModifiers.hideText}
  `}
`;
