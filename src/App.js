import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PrimaryLayout from './components/PrimaryLayout';


const App = () => (
  <MuiThemeProvider>
    <PrimaryLayout />
  </MuiThemeProvider>
);

export default App;
