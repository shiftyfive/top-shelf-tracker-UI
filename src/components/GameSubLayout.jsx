import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import GameOverlay from './GameOverlay';
import Period from './Period';

const GameSubLayout = (props) => (
    console.log(props, 'call from game sublayout'),
  <div className="sublayout-content">
    <Route path="/" component={GameOverlay} />
    <Route path="/" component={Period} />
  </div>
  
)

export default GameSubLayout