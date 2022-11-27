import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as CarIllustrationStyles from "components/CarIllustration/styles";
import * as HeadingStyles from "components/Heading/styles";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    min-height: calc(100vh - 8rem);
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* grid-template-columns: repeat(2, 1fr); */
    /* gap: 13rem; */
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    ${CarIllustrationStyles.Wrapper} {
      flex: 7;
      order: 1;
      max-width: 47rem;
      width: 100%;

      ${media.lessThan("medium")`
        display: none;
      `}
    }
  `}
`;

export const FormContainer = styled.div`
  flex: 8;
  max-width: 40rem;
  margin-right: 16rem;

  ${media.lessThan("medium")`
    flex: 1;
    margin: 0 auto;
  `}
`;
