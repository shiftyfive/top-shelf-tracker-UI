import React, { Component } from 'react';
import superagent from 'superagent';
import style from '../styles/event.css';
import Button from 'material-ui/RaisedButton';
import DeleteEvent from './DeleteEvent';

const Event = props => (
  console.log(props, 'logging props from event'),
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
        <DeleteEvent seasonId={props.seasonId} gameId={props.gameId} className="button-edit-event" eventId={props.event_id} />
      </div>
    </div>
  </div>
);


export default Event;