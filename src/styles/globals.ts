import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fdfdfd",
  text: "#000",
};

export default createGlobalStyle`
  :root {
    --gray-900: #0B132B;
    --gray-500: #1C2541;
    --gray-200: #3A506B;
    --turquoise-500: #5BC0BE;
    --turquoise-200: #6FFFE9;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Ubuntu Mono', monospace;
  }

  body {
    background:#0B132B;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;
