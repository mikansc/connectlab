import { Router } from "./routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./themes/GlobalStyle";
import { Loading } from "@organisms";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
      <Loading show />
      <GlobalStyle />
    </ThemeProvider>
  );
};
