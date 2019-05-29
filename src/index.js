import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';
import {BrowserRouter as Router} from "react-router-dom"

import * as firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyD3NWBrL-NQ9KUjvww8CxMXgIV_swSNKNg",
  authDomain: "nutshell-2-84140.firebaseapp.com",
  databaseURL: "https://nutshell-2-84140.firebaseio.com",
  projectId: "nutshell-2-84140",
  storageBucket: "nutshell-2-84140.appspot.com",
  messagingSenderId: "981881048797",
  appId: "1:981881048797:web:27c7260343a2b3ab"
};

firebase.initializeApp(config);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
      </Router>
  </ThemeProvider>,
  document.querySelector('#root'),
);

