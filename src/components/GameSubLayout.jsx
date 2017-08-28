import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GameOverlay from './GameOverlay';
import Period from './Period';

const GameSubLayout = () => (
  <div className="sublayout-content">
    <Route path="/" component={GameOverlay} />
    <Route path="/" component={Period} />
    <footer className="sublayout-footer">woah</footer>
  </div>
  
)

export default GameSubLayout