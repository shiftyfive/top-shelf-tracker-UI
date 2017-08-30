import React, { Component } from 'react';
import HomeIcon from 'material-ui/svg-icons/action/home';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import GamesIcon from 'material-ui/svg-icons/action/event';
import TeamsIcon from 'material-ui/svg-icons/social/group';
import PlayerIcon from 'material-ui/svg-icons/action/account-circle';
import SeasonIcon from 'material-ui/svg-icons/action/date-range';
import LeagueSettingsIcon from 'material-ui/svg-icons/action/build';
import { BrowserRouter, Link } from 'react-router-dom';
import Style from '../styles/navigation.css';

// const floatStyle = {
//   float: 'right',
// };

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="navContainer">
        <div className="navItem">
          <a><span><BackIcon color="white" className="navIcon" /></span>Back</a>
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
        <Link to={`/app/`}>
        <div className="navItem">
          <a><span><SeasonIcon color="white" className="navIcon" /></span>Seasons</a>
        </div>
        </Link>
        <div className="navItem">
          <a><span><LeagueSettingsIcon color="white" className="navIcon" /></span>Settings</a>
        </div>
      </div>
    );
  }
}

export default Navigation;
