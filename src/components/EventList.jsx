import React, { Component } from 'react';
import request from 'superagent';
import Event from './Event';
import style from '../styles/events-list.css';
import Button from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import AUTH_URL from '../server/server';

const EventsList = (props) => (
    <div>
      {props.events.map(event => <Event {...event} />)}
    </div>
  );

class EventList extends Component {
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
        <footer className="events-list-footer">
          <div className="button-events-list-container">
            <Button
              label="Add Event"
              secondary
              style={{
                marginLeft: '58%',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            />
          </div>
        </footer>
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

export default EventList;
