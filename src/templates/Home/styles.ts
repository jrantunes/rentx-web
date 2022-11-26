import styled, { css } from "styled-components";
import media, { DefaultBreakpoints } from "styled-media-query";

import * as ContainerStyles from "components/Container";
import * as HeadingStyles from "components/Heading/styles";
import * as CarIllustrationStyles from "components/CarIllustration/styles";
import * as ButtonStyles from "components/Button/styles";

import backgroundImg from "assets/rentx-background.png";

export const Wrapper = styled.section`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.colors.black};

    ${ContainerStyles.Container} {
      min-height: 100vh;
      padding: ${theme.spacings.small};
      display: grid;
      align-items: center;
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.grid.gutter};
    }

    ${media.lessThan("880px" as keyof DefaultBreakpoints)`
      background-image: url(${backgroundImg});
      background-position: center center;
      background-size: contain;
      background-repeat: no-repeat;

      ${CarIllustrationStyles.Wrapper} {
        display: none;
      }

      ${ContainerStyles.Container} {
        grid-template-columns: 1fr;
        gap: 0;
      }
    `}
  `}
`;

export const SectionPrimary = styled.section`
  ${({ theme }) => css`
    > div:nth-child(2) {
      margin-top: 10rem;

      ${HeadingStyles.Wrapper},
      p {
        max-width: 41rem;
      }

      p {
        font-family: ${theme.font.inter};
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.light};
        line-height: ${theme.font.sizes.large};
        color: ${theme.colors.white};

        margin-top: ${theme.spacings.medium};
        margin-bottom: 6.4rem;
      }
    }

    ${media.lessThan("880px" as keyof DefaultBreakpoints)`
      display: flex;
      flex-direction: column;
      align-items: center;

      > div:nth-child(2) {
        flex: 1;

        ${HeadingStyles.Wrapper},
        p {
          max-width: 100%;
          text-align: center;
        }

        ${HeadingStyles.Wrapper} {
          font-size: max(2.8rem, 5.75vw);
        }

        p {
          font-size: max(1.2rem, 2vw);
        }
      },
    `}

    ${media.lessThan("415px" as keyof DefaultBreakpoints)`
      ${ButtonStyles.Wrapper} {
        width: 100%;
      }
    `}
  `}
`;
