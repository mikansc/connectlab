import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../themes/default";

// eslint-disable-next-line react/prop-types
const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const withProviders = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

export { withProviders as render };
