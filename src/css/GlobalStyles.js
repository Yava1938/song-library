import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .App {
    text-align: center;
    margin: 20px;
  }

  header {
    background-color: #3b73cd;
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
  }
`;

