import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from "styled-components";

type GlobalStylesProps = {
  theme: DefaultTheme;
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    ${({ theme, removeBg }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.inter};
        font-size: ${theme.font.sizes.medium};

        ${!removeBg &&
        css`
          background-color: ${theme.colors.mainBg};
        `}
      }
    `}
`;

export default GlobalStyles;
