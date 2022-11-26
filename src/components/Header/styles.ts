import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;
