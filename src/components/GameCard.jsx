import React, { Component } from 'react';
import { BrowserRouter, withRouter, Link } from 'react-router-dom';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const GameCard = props => (
  console.log(props, 'from GameCard'),
  <Card>
    <CardHeader
      title={`${props.teams[0].name} VS ${props.teams[1].name}`}
      subtitle={`Game Time: ${props.date}`}
      actAsExpander={false}
      showExpandableButton={false}
    />
    <CardActions>
    <Link to={`${props.location.pathname}/${props.game_id}`} >
      <FlatButton label="Add Stats" />
    </Link>
    </CardActions>
  </Card>
);

export default withRouter(GameCard);