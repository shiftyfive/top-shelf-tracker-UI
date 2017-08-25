import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Navigation from './Navigation';
import Game from './Game';
import EventForm from './EventForm';
import '../App.css';

const PrimaryLayout = props => (
  <div className="primary-layout">
    <header>
       Our React Router 4 App
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" component={Login} />
    </main>
  </div>
);


export default PrimaryLayout;
