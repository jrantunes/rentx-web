import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.span`
  ${({ theme }) => css`
    background: ${theme.colors.gray200};
    margin-left: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${theme.colors.gray500};
    }
  `}
`;
