import React, { Component } from 'react';
import superagent from 'superagent';
import style from '../styles/event.css';
import Button from 'material-ui/RaisedButton';

const styles = {
  button: {
    borderRaius: 40,
  }
}

const Event = props => (
  <div className="event-container">
    <div className="event-row">
      <h4 className="left">Player: {props.playerName}</h4>
      <h4 className="right"> #27 {props.jersey_number}</h4>
    </div>
    <div className="event-row">
      <h5 className="left">Event Type: <span className="event-text">{props.eventType}</span></h5>
      <h5 className="right">result: <span className="event-text">{props.result}</span></h5>
    </div>
    <div>
      <div className="event-row">
        <h5 className="left">Zone: <span className="event-text">{props.eventZone}</span></h5>
        <h5 className="right">Time: <span className="event-text">{props.eventTime}</span></h5>
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
