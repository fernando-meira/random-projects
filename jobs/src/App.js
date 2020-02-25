import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { Header } from './components';
import GlobalStyles from './styles/global';
import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        {/* <Header /> */}
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
