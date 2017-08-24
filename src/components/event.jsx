import React, { Component,} from 'react';
import superagent from 'superagent';
import style from '../styles/event.css';
import Button from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

const Event = (props) => {
  return (
      <div className="event">
        <h4>{props.playerName}</h4>
        <div className="col1">
          <h5>Event Type: {props.eventType}</h5>
          <h5>Zone: {props.eventZone}</h5>
        </div>
        <div className="col2">
          <h5>Time: {props.eventTime}</h5>
          <h5>result: {props.result}</h5>

          <Button
            variant="raised"
            label="Edit"
            default
          />
        </div>
      </div>
  );
};


export default Event;
