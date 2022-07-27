import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#003566',
        },
        secondary: {
            main: '#ffc300',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <App />
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
