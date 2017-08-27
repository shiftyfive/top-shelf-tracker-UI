import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Navigation from './Navigation';
import GamesList from './GamesList';
import GameNavigation from './GameNavigation';
import '../styles/primarylayout.css';
import '../App.css';

class PrimaryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div className="grid">
          <header className="header">
            <h1 className="logo">Top Shelf Tracker</h1>
          </header>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={Login} />
          <div className="col-1-10">
            <Route path="/app" component={Navigation} />
          </div>
          <switch>
            <main className="col-2-10">
              <Route exact path="/app/games" component={GamesList} />
              <Route path="/app/games/:id" component={GameNavigation} />
            </main>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default PrimaryLayout;
