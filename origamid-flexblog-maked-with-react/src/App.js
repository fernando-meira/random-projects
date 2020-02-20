import React from 'react';

import GlobalStyle from '../src/styles/global';

import { Main } from '../src/pages';

import { Header } from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
