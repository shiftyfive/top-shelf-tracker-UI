import React, { Component } from 'react';
import Request from 'superagent';
import Button from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import EventList from './EventList';
import EventsForm from './EventForm';
import Period from './Period';
import AUTH_URL from '../server/server.js';
import '../styles/game-overlay.css';

class GameOverlay extends Component {
  constructor() {
    super();
    this.state = {
      game: null,
      activePeriod: 0,
    };
    this.addEventCallback = this.addEventCallback.bind(this);
  }
  componentWillMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const seasonId = this.props.match.params.seasonId;
    const gameId = this.props.match.params.gameId;
    Request
      .get(`${AUTH_URL}api/${currentUser.userId}/games/${seasonId}/${gameId}`)
      .end((err, res) => {
        if (err) {
          console.log('something went wrong on the gamesList mount');
        }
        console.log(res.body, 'logging res.body from component will mount in GameOverlay')
        this.setState({ game: res.body });
      });
    // this.handleSubmit = this.handleSubmit.bind(this);      
  }

  addEventCallback(newEvent) {
    this.setState(state => ({
      game: {
        ...state.game,
        events: [...state.game.events, newEvent],
      }
    }));
    console.log(this.state, 'this.state logged inside of addEventCallback on GameOverlay Component')
  }

  render() {
    console.log(this.state, 'logging state via GameOverlay')
    const dataReady = this.state.game;
    return (
      <div>
        <div className="nav-game-container">
          <div className="nav-game-child-1-3">
            <h3 className="nav-game-text">
            Period 1
            </h3>
          </div>
          <div className="nav-game-child-1-3">
            <h3 className="nav-game-text">
            Period 2
            </h3>
          </div>
          <div className="nav-game-child-1-3">
            <h3 className="nav-game-text">
            Period 3
            </h3>
          </div>
          <div className="nav-game-child-4-5">
            <h3 className="nav-game-text">
            OT
            </h3>
          </div>
          <div className="nav-game-child-4-5">
            <h3 className="nav-game-text">
            SO
            </h3>
          </div>
        </div>
        {(dataReady) ?
          <div><EventList events={this.state.game.events} /><footer className="events-list-footer">
          <EventsForm formObj={this.state.game} addEventCallback={this.addEventCallback} /></footer>
          </div>
          : <CircularProgress size={80} thickness={5} />}
        <footer className="events-list-footer">
        </footer>
        </div>
    );
  }
}

export default GameOverlay;
