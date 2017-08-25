import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PrimaryLayout from './components/PrimaryLayout';


const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <PrimaryLayout />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
