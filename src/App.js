import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect, withRouter } from 'react-router-dom';
import Login from './components/Login.jsx';
import HomePage from './components/HomePage.jsx';
import Navigation from './components/Navigation.jsx'
import Game from './components/Game.jsx';
import EventForm from './components/EventForm';
import './App.css';

const App = () => (
  <div>
    <Game />
  </div>
)

export default App;
