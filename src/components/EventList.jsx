import React, { Component } from 'react';
import request from 'superagent';
import Event from './Event';
import style from '../styles/events-list.css';
import Button from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import AUTH_URL from '../server/server';

const EventsList = props => (
  console.log(props, 'logging props from eventslist'),
  <div>
    {props.events.map(event => <Event seasonId={props.seasonId} gameId={props.gameId} {...event} />)}
  </div>
);


export default EventsList;