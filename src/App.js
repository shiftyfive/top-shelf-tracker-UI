import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './components/Login.jsx';
import HomePage from './components/HomePage.jsx';
import Game from './components/Game.jsx';
import './App.css';

const App = () => (
  <div>
    <HomePage />
  </div>
)

export default App;
