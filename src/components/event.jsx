import superagent from 'superagent';
import React, { Component,} from 'react';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Raised-Button'
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

class Event extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="event-card">
      <h4>${this.state.playerName}</h4>
       <Avatar
       className="team-avatar"
       src=`${this.state.playerTeamIcon}`
       />
       <h5>Event Type: ${this.state.eventType}</h5>
       <h5>Zone: ${this.state.eventZone}</h5>
       <h5>Time: ${this.state.eventTime}</h5>
       <h5>result: ${this.state.result}</h5>
      </div>
    )
  }
}