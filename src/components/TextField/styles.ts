import styled, { css, DefaultTheme } from "styled-components";
import { TextFieldProps } from ".";

type WrapperProps = Pick<TextFieldProps, "disabled"> & {
  error: boolean;
  hasValue: boolean;
};

type HasValueProps = {
  hasValue: boolean;
};

type IconPositionProps = {
  iconPosition: "left" | "right";
};

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.white};
    padding: 0 ${theme.spacings.xsmall};
    border: 0.1rem solid ${theme.colors.gray200};
    transition: border ${theme.transitions.fast};

    &:hover,
    &:focus-within {
      border-color: ${theme.colors.gray400};
    }

    cursor: text;
  `}
`;

type InputContentProps = {
  hasIcon: boolean;
} & IconPositionProps;

const inputContentModifiers = {
  withIcon: (theme: DefaultTheme, iconPosition: "left" | "right") => css`
    border-${iconPosition}: 0.1rem solid ${theme.colors.mainBg};
    padding-${iconPosition}: ${theme.spacings.xsmall};
    margin-${iconPosition}: ${theme.spacings.xsmall};

    ${Label} {
      left: ${iconPosition === "left" ? theme.spacings.xsmall : 0};
    }
  `
};

export const InputContent = styled.div<InputContentProps>`
  ${({ theme, hasIcon, iconPosition }) => css`
    flex: 1;
    position: relative;

    ${hasIcon && inputContentModifiers.withIcon(theme, iconPosition)}
  `}
`;

type InputProps = {
  hasLabel: boolean;
} & HasValueProps;

export const Input = styled.input<InputProps>`
  ${({ theme, hasValue, hasLabel }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.gray700};
    background: transparent;
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    border: 0;
    outline: none;
    transition: 0.4s;
    transform: ${hasValue && hasLabel ? "translateY(0.8rem)" : "translateY(0)"};

    ${hasLabel &&
    css`
      &:focus {
        transform: translateY(0.8rem);
        transition: 0.4s;

        & + label {
          opacity: 1;
          transition: 0.4s;
        }
      }
    `}

    &::placeholder {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
      color: ${theme.colors.gray400};
    }
  `}
`;

export const Label = styled.label<HasValueProps>`
  ${({ theme, hasValue }) => css`
    cursor: text;
    position: absolute;
    background: transparent;
    color: ${theme.colors.gray400};
    font-size: ${theme.font.sizes.xxsmall};
    font-weight: ${theme.font.light};
    top: 0.6rem;
    left: 0;
    opacity: ${hasValue ? "1" : "0"};
    transition: 0.4s;
  `}
`;

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    order: ${iconPosition === "right" ? 1 : 0};

    svg {
      width: 2rem;
      height: 2rem;
      color: ${theme.colors.gray500};
    }
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.lightPrimary};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

const wrapperModifiers = {
  disabled: () => css`
    ${Label},
    ${Input},
    ${InputWrapper} {
      cursor: not-allowed;
    }

    ${InputWrapper} {
      opacity: 0.8;
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${Label} {
      color: ${theme.colors.lightPrimary};
    }

    ${InputWrapper} {
      border: 0.1rem solid ${theme.colors.lightPrimary};
    }
  `,

  withValue: (theme: DefaultTheme) => css`
    ${Icon} {
      svg {
        color: ${theme.colors.primary};
      }
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, error, hasValue }) => css`
    ${disabled && wrapperModifiers.disabled()}
    ${error && wrapperModifiers.error(theme)}
    ${hasValue && wrapperModifiers.withValue(theme)}
  `}
`;
