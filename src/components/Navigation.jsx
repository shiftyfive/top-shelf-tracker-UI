import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomeIcon from 'material-ui/svg-icons/action/home';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import GamesIcon from 'material-ui/svg-icons/action/event';
import TeamsIcon from 'material-ui/svg-icons/social/group';
import PlayerIcon from 'material-ui/svg-icons/action/account-circle';
import LeagueSettingsIcon from 'material-ui/svg-icons/action/build';
import { BrowserRouter } from 'react-router-dom';
import Style from '../styles/navigation.css';

const floatStyle = {
  float: 'right',
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (localStorage.getItem('tstToken')) ? (
      <MuiThemeProvider>
        <div className="container">
          <div className="navItem">
            <a><span><BackIcon color="white" className="navIcon" /></span>Back</a>
          </div>
          <div className="navItem">
            <a><span><HomeIcon color="white" className="navIcon" /></span>Home</a>
          </div>
          <div className="navItem">
            <a><span><GamesIcon color="white" className="navIcon" /></span>Games</a>
          </div>
          <div className="navItem">
            <a><span><TeamsIcon color="white" className="navIcon" /></span>Teams</a>
          </div>
          <div className="navItem">
            <a><span><PlayerIcon color="white" className="navIcon" /></span>Players</a>
          </div>
          <div className="navItem">
            <a><span><LeagueSettingsIcon color="white" className="navIcon" /></span>Settings</a>
          </div>
        </div>
      </MuiThemeProvider>
    ) : (
      null
    );
  }
}

export default Navigation;
