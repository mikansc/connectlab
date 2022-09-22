import { ThemeProvider } from "styled-components";

import { Router } from "./routes";

import { Loading } from "@organisms";
import { AppProvider, AuthProvider } from "@contexts";

import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./themes/GlobalStyle";
import { StyledToastContainer } from "./themes/ToastContainer.styles";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <AuthProvider>
          <Router />
          <Loading />
          <GlobalStyle />
          <StyledToastContainer pauseOnHover={false} closeButton={false} position="top-right" />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
};
