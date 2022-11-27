import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as CarIllustrationStyles from "components/CarIllustration/styles";
import * as HeadingStyles from "components/Heading/styles";
import { AuthProps } from ".";

type IllustrationPosition = Pick<AuthProps, "illustrationPosition">;

export const Wrapper = styled.section<IllustrationPosition>`
  ${({ theme, illustrationPosition }) => css`
    min-height: calc(100vh - 8rem);
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.medium} ${theme.spacings.xsmall};

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.small};
    }

    ${CarIllustrationStyles.Wrapper} {
      flex: 7;
      order: ${illustrationPosition === "right" ? 1 : 0};
      max-width: 47rem;
      width: 100%;

      ${media.lessThan("medium")`
        display: none;
      `}
    }
  `}
`;

export const FormContainer = styled.div<IllustrationPosition>`
  ${({ illustrationPosition }) => css`
    flex: 8;
    max-width: 40rem;
    margin-${illustrationPosition}: 16rem;

    ${media.lessThan("medium")`
      flex: 1;
      margin: 0 auto;
    `}
  `}
`;
