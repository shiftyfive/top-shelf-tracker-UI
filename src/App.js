import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Route exact path="/" component={Login} />
          
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
