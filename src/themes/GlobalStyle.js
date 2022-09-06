import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
    width: 100vw;
    height: 100%;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;
