import React, { Component } from 'react';
import superagent from 'superagent';
import style from '../styles/event.css';
import Button from 'material-ui/RaisedButton';

const Event = props => (
  <div className="event-container">
    <div className="event-row">
      <h4 className="left">Player: {props.player_name}</h4>
      <h4 className="right"> #{props.jersey_number}</h4>
    </div>
    <div className="event-row">
      <h5 className="left">Event Type: <span className="event-text">{props.event_type}</span></h5>
      <h5 className="right">result: <span className="event-text">{props.result}</span></h5>
    </div>
    <div>
      <div className="event-row">
        <h5 className="left">Zone: <span className="event-text">{props.event_zone}</span></h5>
        <h5 className="right">Time: <span className="event-text">{props.event_time}</span></h5>
      </div>
      <div>
        <Button
          className="button-edit-event"
          primary={true}
          variant="raised"
          label="Edit"
          default
        />
      </div>
    </div>
  </div>
);


export default Event;