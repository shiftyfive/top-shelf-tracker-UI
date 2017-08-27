import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PrimaryLayout from './components/PrimaryLayout';


const App = () => (
  <MuiThemeProvider>
    <PrimaryLayout />
  </MuiThemeProvider>
);

export default App;
