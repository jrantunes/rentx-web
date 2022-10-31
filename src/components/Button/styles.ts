import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";
import { ButtonProps } from ".";

type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth" | "color">;

const wrapperModifiers = {
  red: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};

    &:hover {
      background-color: ${darken(0.1, theme.colors.primary)};
    }

    &:disabled {
      opacity: 0.6;

      &:hover {
        background-color: ${theme.colors.primary};
      }
    }
  `,

  black: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.darkBg};

    &:hover {
      background-color: ${darken(0.1, theme.colors.darkBg)};
    }

    &:disabled {
      opacity: 0.6;

      &:hover {
        background-color: ${theme.colors.darkBg};
      }
    }
  `,

  green: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green};

    &:hover {
      background-color: ${darken(0.1, theme.colors.green)};
    }

    &:disabled {
      opacity: 0.6;

      &:hover {
        background-color: ${theme.colors.green};
      }
    }
  `,

  small: () => css`
    height: 6rem;
  `,

  medium: (theme: DefaultTheme) => css`
    height: 7rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  large: (theme: DefaultTheme) => css`
    height: 8rem;
    padding: ${theme.spacings.xxsmall} 8rem;
    font-size: ${theme.font.sizes.medium};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    height: auto;
    padding: 1.4rem;

    svg {
      width: 2rem;
      height: 2rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, color, hasIcon }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    font-family: ${theme.font.inter};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    transition: background-color ${theme.transitions.fast};
    text-decoration: none;

    ${!!size && wrapperModifiers[size!](theme)}
    ${!!color && wrapperModifiers[color!](theme)}
    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${fullWidth && wrapperModifiers.fullWidth()}
  `}
`;
