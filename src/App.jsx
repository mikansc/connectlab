import { Router } from "./routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./themes/GlobalStyle";
import { Loading } from "@organisms";

import { AuthProvider } from "@contexts";

export const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <Loading show={false} />
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  );
};
