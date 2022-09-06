import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./themes/GlobalStyle";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Hi</div>
      <GlobalStyle />
    </ThemeProvider>
  );
};
