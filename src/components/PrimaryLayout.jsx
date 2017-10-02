import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import HomePage from './HomePage';
import Navigation from './Navigation';
import GameSubLayout from './GameSubLayout'
import GamesList from './GamesList';
import Seasons from './Seasons';
import Teams from './Teams';
import Header from './Header';
import Players from './Players';
import Settings from './Settings';
import '../styles/primarylayout.css';
import '../App.css';

class PrimaryLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: null,
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="grid">
        <Route path="/app" component={Header} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={HomePage} />
          <div className="col-1-10">
          <Route path="/app/:seasonID" component={Navigation} />
          </div>
          <switch>
          <main className="col-2-10">
              <Route exact path="/app/:seasonId/list/teams/:teamId" component={Players} />
              <Route exact path="/app/:seasonId/list/teams" component={Teams} />
              <Route exact path="/app/:seasonId/list/players" component={Players} />
              <Route exact path="/app/:seasonId//settings" component={Settings} />
              <Route exact path="/app/:seasonId/:gameId" component={GameSubLayout} />
              <Route exact path="/app/:seasonId" component={GamesList} />
              <Route exact path="/app" component={Seasons} />
            </main>
          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default PrimaryLayout;
