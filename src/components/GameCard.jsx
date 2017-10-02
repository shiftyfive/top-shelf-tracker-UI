import React, { Component } from 'react';
import { BrowserRouter, withRouter, Link } from 'react-router-dom';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/RaisedButton';
import style from '../styles/game-card.css';
import DeleteGame from './DeleteGame';

const GameCard = props => (
  console.log(props, 'loggin props from game card'),
  <Card>
    <CardHeader
      key={props.game_id}
      title={`${props.teams[0].name} VS ${props.teams[1].name}`}
      subtitle={`Game Time: ${props.date}`}
      actAsExpander={false}
      showExpandableButton={false}
    />
    <CardActions>
    <Link to={`${props.location.pathname}/${props.game_id}`} >
      <FlatButton primary label="Add Stats" />
      </Link>
      <DeleteGame game_id={props.game_id} className="delete-button" />
    </CardActions>
  </Card>
);

export default withRouter(GameCard);