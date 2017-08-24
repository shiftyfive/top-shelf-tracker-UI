import React, { Component  } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameNavigation from './GameNavigation';
import EventForm from './EventForm';

const Game = () => {
  return (
    <MuiThemeProvider>
      <div>
        <GameNavigation />
        <EventForm />
      </div>
    </MuiThemeProvider>
  );
}

export default Game;
