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
    this.styles = {
      selected: {
        backgroundColor: '#027BCE',
      },
    };
    this.addEventCallback = this.addEventCallback.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  deleteEvent(event) {
    const self = this;
    console.log(self.state, 'logging self.state from deleteEvent')
    let activePeriod = this.state.activePeriod;
    let index = self.state.game.events[activePeriod].indexOf(event.target.value);
    self.state.game.events[activePeriod].splice(index, 1);
    this.setState(state => ({
      game: {
        ...self.state.game,
        events: [...self.state.game.events],
      }
    }));
  }

  addEventCallback(newEvent) {
    const self = this;
    let activePeriod = this.state.activePeriod
    self.state.game.events[activePeriod].push(newEvent);

    this.setState(state => ({
      game: {
        ...self.state.game,
        events: [...self.state.game.events],
      }
    }));
  }

  handleClick(value) {
    this.setState(() => ({ activePeriod: value }));
  }
  render() {
    const dataReady = this.state.game;
    return (
      <div>
        <div className="nav-game-container">
          <div onClick={() => this.handleClick(0)} className="nav-game-child-1-3" style={(this.state.activePeriod === 0 ? this.styles.selected : null)}>
            <h3 className="nav-game-text">
            Period 1
            </h3>
          </div>
          <div onClick={() => this.handleClick(1)} className="nav-game-child-1-3" style={(this.state.activePeriod === 1 ? this.styles.selected : null)}>
            <h3 className="nav-game-text">
            Period 2
            </h3>
          </div>
          <div onClick={() => this.handleClick(2)}  className="nav-game-child-1-3" style={(this.state.activePeriod === 2 ? this.styles.selected : null)}>
            <h3 className="nav-game-text">
            Period 3
            </h3>
          </div>
          <div onClick={() => this.handleClick(3)}  className="nav-game-child-4-5" style={(this.state.activePeriod === 3 ? this.styles.selected : null)} >
            <h3 className="nav-game-text">
            OT
            </h3>
          </div>
          <div onClick={() => this.handleClick(4)}  className="nav-game-child-4-5" style={(this.state.activePeriod === 4 ? this.styles.selected : null)}>
            <h3 className="nav-game-text">
            SO
            </h3>
          </div>
        </div>
        {(dataReady) ?
          <div>
            <div className="events-well"><EventList seasonId={this.props.match.params.seasonId} gameId={this.props.match.params.gameId} events={this.state.game.events[this.state.activePeriod]} />
            </div>
            <footer className="events-list-footer">
              <EventsForm playerList={this.state.game.players} activePeriod={this.state.activePeriod} addEventCallback={this.addEventCallback} />
            </footer>
          </div>
          : <CircularProgress size={80} thickness={5} />}
        <footer className="events-list-footer" />
      </div>
    );
  }
}

export default GameOverlay;