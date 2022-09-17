import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import { Router } from "./routes";

import { Loading } from "@organisms";
import { AppProvider, AuthProvider } from "@contexts";

import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./themes/GlobalStyle";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppProvider>
        <AuthProvider>
          <Router />
          <Loading />
          <GlobalStyle />
          <ToastContainer
            pauseOnHover={false}
            closeButton={false}
            theme="colored"
            position="top-right"
          />
        </AuthProvider>
      </AppProvider>
    </ThemeProvider>
  );
};
