import React, { Component } from 'react';
import request from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import AUTH_URL from '../server/server';

const Event = (props) => {
  return (
    <MuiThemeProvider>
      <div className="event-card">
        <h4>{props.playerName}</h4>
        <h5>Event Type: {props.eventType}</h5>
        <h5>Zone: {props.eventZone}</h5>
        <h5>Time: {props.eventTime}</h5>
        <h5>result: {props.result}</h5>
        <Button
          variant="raised"
          label="Edit"
          default
        />
      </div>
    </MuiThemeProvider>
  );
};

const EventsList = (props) => {
  return (
    <div>
      {props.events.map(event => <Event {...event} />)}
    </div>
  );
};

class Game extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        {
          playerName: 'Steven Stamkos',
          eventType: 'Shot',
          eventZone: 'left high slot',
          eventTime: '789',
          result: 'Goal',
        },
        {
          playerName: 'John Tavares',
          eventType: 'shot',
          eventZone: 'center ice',
          eventTime: '890',
          result: 'deflection: recovery',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <EventsList events={this.state.events} />
      </div>
    );
  }
}

// coponentDidMount() {
//   request
//     .post(`${AUTH_URL}`)
//     .send(storage.getItem('token')
//     .end((err, res) => {
//       this.state.events = res
//     })
// }

export default Game;
