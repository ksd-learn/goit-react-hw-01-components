import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#ffffff',
    red: '#e80a0a',
    violet: '#8627de',
    green: '#089308',
    blue: '#03b2ed',
    gray: '#9a9898',
    lightGray: '#f0efee',
    white: 'white'
  } 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
