import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

const testTheme = {
  colors: {
    main: { default: "#FF8818", dark: "#CA6F1E", light: "#F0B27A", text: "#FFF" },
    secondary: { default: "#2E4052", dark: "#212F3C", light: "#5D6D7E", text: "#FFF" },
    error: "#F44336",
    info: "#29B6F6",
    warning: "#FFA726",
    success: "#66BB6A",
    disabled: { background: "#CCC", text: "#FFF" },
    text: { default: "#495057FF", light: "#4950578F" },
    black: "#333",
    white: "#EEE",
    gray: "#D7BDDD",
    background: {
      default: "#D9D9D9",
      main: "#FFDDA2",
      secondary: "#C3DFED",
      error: "#FDC7AE",
      info: "#A9F4FE",
      warning: "#FFE6A8",
      success: "#D4F8CB",
    },
    border: "rgba(0,0,0,0.1)",
  },
  shadow: {
    default: "1px 1px 1px rgba(0,0,0,0.1)",
    big: "0 2px 2px rgba(0,0,0,0.2)",
  },
  borderRadius: "3px",
  breakpoints: {
    small: "426px",
    medium: "769px",
    large: "1025px",
  },
};

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={testTheme}>{children}</ThemeProvider>;
};

const withProviders = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export { withProviders as render };
