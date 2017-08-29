import React, { Component } from 'react';
import Request from 'superagent';
import AUTH_URL from '../server/server.js';
import '../styles/game-overlay.css';

class GameOverlay extends Component {
  constructor() {
    super();
    this.state = {
      gameState: {},
    }
  }

  componentWillMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const seasonId = this.props.match.params.seasonId;
    const gameId = this.props.match.params.gameId;
    console.log(Request.get(`${AUTH_URL}api/${currentUser.userId}/games/${seasonId}/${gameId}`))
    Request
      .get(`${AUTH_URL}api/${currentUser.userId}/games/${seasonId}/${gameId}`)    
      .end((err, res) => {
        if(err) {
          console.log('something went wrong on the gamesList mount');
        }
        console.log(res.body)
        this.setState({ gameState: res.body });
      });
  }
  render() {
    return (
      console.log(this.state, 'from render gameoverlay'),
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
    );
  }
}

export default GameOverlay;
