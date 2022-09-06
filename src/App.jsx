import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">Hi</div>
    </ThemeProvider>
  );
};
