import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
  }

  button {
    cursor: pointer;
  }

  p {
    padding: 20px 0;

    color: #999;
    line-height: 2;
    font-size: 0.8rem;
  }

`;
