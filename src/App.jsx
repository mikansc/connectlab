import { Router } from "./routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./themes/GlobalStyle";
import { Loading } from "@organisms";

import { AppProvider, AuthProvider } from "@contexts";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <AuthProvider>
          <Router />
          <Loading />
          <GlobalStyle />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
};
