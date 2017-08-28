import React, { Component } from 'react';
import '../styles/game-overlay.css';

class GameOverlay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
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
          <h3 ClassName="nav-game-text">
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
