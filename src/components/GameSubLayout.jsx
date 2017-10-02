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

export default GameSubLayout
;