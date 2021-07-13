import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import {CssBaseline,ThemeProvider,createMuiTheme} from '@material-ui/core'
import App from './App';

const theme = createMuiTheme({
  overrides:{
    MuiCssBaseline:{
      '@global':{
        html:{
          fontSize: '14px'
        }
      }
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


