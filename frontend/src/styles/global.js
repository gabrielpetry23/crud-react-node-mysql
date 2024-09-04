import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100vh; //ocupar todo espaço da tela
    height: 100vh; //ocupar todo espaço da tela
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  } 
`;

export default GlobalStyle;