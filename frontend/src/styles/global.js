import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh; 
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.body};  // Cor de fundo do body
    color: ${({ theme }) => theme.text};            // Cor do texto
    transition: background-color 0.3s ease;
  }
`;

export default GlobalStyle;
