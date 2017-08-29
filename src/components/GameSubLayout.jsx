import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GameOverlay from './GameOverlay';
import Period from './Period';
import style from '../styles/game-sublayout.css';

const GameSubLayout = props => (
  <div className="sublayout-content">
    <Route path="/app/:seasonId/:gameId" component={GameOverlay} />
  </div>
);

// <Route path="/" component={GameOverlay} />
// <Route path="/app/:seasonId/:gameId" component={Period} />
// removed Period so much for this bieng a sub layout

export default GameSubLayout
;