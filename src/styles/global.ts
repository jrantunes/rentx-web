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
    @font-face {
      font-family: "Archivo";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local("Archivo Regular"), local("Archivo-Regular"),
        url("/public/fonts/archivo-v18-latin-regular.woff2") format("woff2");
    }

    @font-face {
      font-family: "Archivo";
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: local("Poppins Normal"), local("Poppins-Normal"),
        url("/public/fonts/archivo-v18-latin-500.woff2") format("woff2");
    }

    @font-face {
      font-family: "Archivo";
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local("Archivo SemiBold"), local("Archivo-SemiBold"),
        url("/public/fonts/archivo-v18-latin-600.woff2") format("woff2");
    }

    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local("Inter Regular"), local("Inter-Regular"),
        url("/public/fonts/inter-v12-latin-regular.woff2") format("woff2");
    }

    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: local("Inter Normal"), local("Inter-Normal"),
        url("/public/fonts/inter-v12-latin-500.woff2") format("woff2");
    }

    @font-face {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local("Inter SemiBold"), local("Inter-SemiBold"),
        url("/public/fonts/inter-v12-latin-600.woff2") format("woff2");
    }

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
