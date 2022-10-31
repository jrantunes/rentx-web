export default {
  grid: {
    gutter: "3.2rem",
    container: "130rem"
  },
  font: {
    inter:
      "Inter, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    archivo:
      "Archivo, --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 400,
    normal: 500,
    bold: 600,
    sizes: {
      xxsmall: "1.2rem",
      xsmall: "1.4rem",
      small: "1.6rem",
      medium: "1.8rem",
      large: "2.4rem",
      xlarge: "3rem",
      xxlarge: "5.4rem"
    }
  },
  colors: {
    primary: "#DC1637",
    lightPrimary: "#FF99AA",
    mainBg: "#F4F5F6",
    darkBg: "#29292E",
    black: "#1B1B1F",
    white: "#FFFFFF",
    green: "#03B252",
    gray200: "#EBEBF0",
    gray300: "#DEDEE3",
    gray400: "#AEAEB3",
    gray500: "#7A7A80",
    gray700: "#47474D"
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem"
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transitions: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out"
  }
} as const;
