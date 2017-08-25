import React, { Component  } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameNavigation from './GameNavigation';
import EventForm from './EventForm';

const Game = () => {
  return (
    <div>
      <GameNavigation />
      <EventForm />
    </div>
  );  
}

export default Game;
