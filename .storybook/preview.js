import { ThemeProvider } from "styled-components";
import theme from "styles/theme.ts"
import GlobalStyles from "styles/global.ts";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles removeBg />
    </ThemeProvider>
  )
]
