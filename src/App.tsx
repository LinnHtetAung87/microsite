import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import Slideone from './components/Slideone';
import Slidetwo from './components/Slidetwo';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Slideone />
        <Slidetwo />
      </main>
    </ThemeProvider>
  );
}

export default App;
