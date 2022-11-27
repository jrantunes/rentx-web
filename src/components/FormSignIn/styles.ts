import styled, { css } from "styled-components";

export const FormLink = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    display: block;
    position: relative;
    cursor: pointer;
    font-size: ${theme.font.sizes.small};
    color: #737380;
    transition: color ${theme.transitions.fast};
    margin: ${theme.spacings.xsmall} 0 ${theme.spacings.xxsmall};
    width: fit-content;

    &:after {
      content: "";
      height: 0.2rem;
      background-color: ${theme.colors.primary};
      position: absolute;
      bottom: -0.4rem;
      left: 0;
      /* width: 0%; */
      /* transition: width ${theme.transitions.default}; */
      width: 100%;
      transform: scaleX(0);
      transition: transform ${theme.transitions.default};
      transform-origin: bottom right;
    }

    &:hover {
      color: ${theme.colors.primary};

      &:after {
        /* width: 100%; */
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  `}
`;
