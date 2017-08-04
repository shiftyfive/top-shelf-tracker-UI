import React, { Component } from 'react';
import request from 'superagent';
// import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import AUTH_URL from '../server/server';

const Event = (props) => {
  return (
    <div className="event-card">
      <h4>${props.playerName}</h4>
      <h5>Event Type: ${props.eventType}</h5>
      <h5>Zone: ${props.eventZone}</h5>
      <h5>Time: ${props.eventTime}</h5>
      <h5>result: ${props.result}</h5>
    </div>
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
          zone: 'left high slot',
          time: '789',
          result: 'Goal',
        },
        {
          playerName: 'John Tavares',
          eventType: 'shot',
          zone: 'center ice',
          time: '890',
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
