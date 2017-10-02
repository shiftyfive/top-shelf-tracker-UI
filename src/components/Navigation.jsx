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

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(props) {
    console.log(this.props.match)
    return (
      <div className="navContainer">
        <Link to={'/app/'}>
          <div className="navItem">
            <a><span><BackIcon color="white" className="navIcon" /></span>Seasons</a>
          </div>
        </Link>
        <Link to={`/app/${this.props.match.params.seasonID}`}>
          <div className="navItem">
            <a><span><GamesIcon color="white" className="navIcon" /></span>Games</a>
          </div>
        </Link>
        <Link to={`/app/${this.props.match.params.seasonID}/list/teams`}>
          <div className="navItem">
            <a><span><TeamsIcon color="white" className="navIcon" /></span>Teams</a>
          </div>
        </Link>
        <Link to={`/app/${this.props.match.params.seasonID}/list/players`}>
          <div className="navItem">
            <a><span><PlayerIcon color="white" className="navIcon" /></span>Players</a>
          </div>
        </Link>
        <Link to={`/app/${this.props.match.params.seasonID}//settings`}>
          <div className="navItem">
            <a><span><LeagueSettingsIcon color="white" className="navIcon" /></span>Settings</a>
          </div>
        </Link>
      </div>
    );
  }
}

export default Navigation;
