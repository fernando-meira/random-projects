import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    margin: 0 auto;
    /* max-width: 63.75rem; */
    /* padding: 0 1.25rem 3.125rem; */
  }

  body {
    background: #fff;
    -webkit-font-smothing: antialiased !important;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    width: 100%;
    margin: auto;
    /* max-width: 1020px; */
    /* padding: 0 20px 50px; */
  }

  button {
    cursor: pointer;
  }
`;
