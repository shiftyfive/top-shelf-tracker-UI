import React, { Component } from 'react';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const GameCard = props => (
  <Card>
    <CardHeader
      title={`${props.teams[0].name} VS ${props.teams[1].name}`}
      subtitle={`Game Time: ${props.date}`}
      actAsExpander={false}
      showExpandableButton={false}
    />
    <CardActions>
      <FlatButton label="Add Stats" />
    </CardActions>
  </Card>
);

export default GameCard;