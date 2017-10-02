import React, { Component } from 'react';
import Button from 'material-ui/RaisedButton';
import style from '../styles/settings.css';
import Request from 'superagent';
import { BrowserRouter } from 'react-router-dom';
import GameForm from './GameForm';
import TeamsForm from './TeamsForm';
import PlayersForm from './PlayersForm';
import DeleteSeason from './DeleteSeason';
import CircularProgress from 'material-ui/CircularProgress';
import AUTH_URL from '../server/server';


class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams_list: [],
    };
  }

  componentWillMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .get(`${AUTH_URL}api/${currentUser.userId}/teams`)
      .end((err, res) => {
        if (err) {
          console.log('something went wrong');
        }
        this.setState({ teams_list: res.body });
        console.log(this.state);
      });
  }

  render(props) {
    const dataReady = this.state.teams_list;
    return (
      console.log(this.props.history, 'loggin this.props.history from settings'),
      <div>
        <h2>Add Games Teams and Players to your currently selected Season</h2>
        {(dataReady) ?
          <div>
          <div className="settings-container">
            <div className="settings-child">
              <h4 className="inline">Add Games</h4>
              <GameForm seasonId={this.props.match.params.seasonId} teamData={this.state.teams_list} />
            </div>
            <div className="settings-child">
              <h4 className="inline">Add Teams</h4>
              <TeamsForm />
            </div>
            <div className="settings-child">
              <h4 className="inline">Add Players</h4>
              <PlayersForm teamData={this.state.teams_list} />
            </div>
          </div>
          <footer className="delete-season">
          <DeleteSeason seasonId={this.props.match.params.seasonId} history={this.props.history} />
          </footer>
          </div>
          : <CircularProgress />
        }
      </div>
    );
  }
}

export default Settings;
