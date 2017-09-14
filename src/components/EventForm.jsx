import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Request from 'superagent';
import React, { Component } from 'react';
import AUTH_URL from '../server/server';
import PlayerSearchName from './PlayerSearchName';
import style from '../styles/event-form.css';

const selectionValue = 2;

injectTapEventPlugin();
class EventForm extends Component {
  constructor(props) {
    console.log(props, 'logging props from events form');
    super(props);
    this.state = {
      open: false,
      playerData: {
        player_id: '',
        first_name: '',
        last_name: '',
        jersey_number: '',
      },
      eventData: {
        period: '',
        event_type: '',
        event_zone: '',
        result: '',
        event_time: '',
      },
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updatePlayerDataCallBack = this.updatePlayerDataCallBack.bind(this);
  }


  handleOpen() {
    this.setState((state) => ({ open: true }));
  }

  handleClose() {
    this.setState(() => ({ open: false }));
  }

  // this.setState(() => ({ [field]: value }));

  updateField(field, value) {
    this.setState(state => ({
      eventData: {
        ...this.state.eventData,
        [field]: value,
      }
    }));
  }

  updatePlayerDataCallBack(playerObj) {
    console.log(playerObj);
    this.setState(state => ({
      playerData: {
        ...state.playerData,
        player_id: playerObj.player_id,
        first_name: playerObj.first_name,
        last_name: playerObj.last_name,
        jersey_number: playerObj.jersey_number,
      },
    }));
  }

  handleSubmit(props) {
    console.log('handle submit called')
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const eventObject = {
      game_id: 1,
      player_id: this.state.playerData.player_id,
      player_name: `${this.state.playerData.first_name  } ${this.state.playerData.last_name}`,
      jersey_number: this.state.playerData.jersey_number,
      period: this.props.activePeriod + 1,
      event_type: this.state.eventData.event_type,
      event_zone: this.state.eventData.event_zone,
      result: this.state.eventData.result,
      event_time: this.state.eventData.event_time,
    };
    Request
      .post(`${AUTH_URL}api/1/games/1/1`)
      .send(eventObject)
      .end((err, res) => {
        console.log(res);
      });
    this.props.addEventCallback(eventObject);
    this.handleClose();
  }

  render(props) {
    console.log(this.state,'logging state from event form component')
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Add"
        primary
        keyboardFocused
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Button
          label="Add Event"
          onClick={this.handleOpen}
          secondary
          style={{
            marginLeft: '58%',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        />
        <Dialog
          title="Add Event"
          actions={actions}
          modal={false}
          open={this.state.open}
        >
          <div className="hackey-style">
            <PlayerSearchName
              playerData={this.props.playerList}
              updatePlayerDataCallBack={this.updatePlayerDataCallBack}
            />
          </div>
          <br />
          <div className="fields-container">
            <div>
              <TextField
                hintText="Event Time"
                value={this.state.eventData.event_time}
                onChange={event => this.updateField('event_time', event.target.value)}
              />
            </div>
            <SelectField
              hintText="Event Type"
              value={this.state.eventData.event_type}
              onChange={(...event) => this.updateField('event_type', event[selectionValue])}
            >
              <MenuItem value="Shot" primaryText="Shot" />
              <MenuItem value="Pass" primaryText="Pass" />
              <MenuItem value="Hit" primaryText="Hit" />
            </SelectField>
            <SelectField
              className="hackey-style"
              hintText="Event Result"
              value={this.state.eventData.result}
              onChange={(...event) => this.updateField('result', event[selectionValue])}
            >
              <MenuItem value="Goal" primaryText="Goal" />
              <MenuItem value="Save" primaryText="Save" />
              <MenuItem value="Zone Exit" primaryText="Zone Exit" />
              <MenuItem value="Turn Over" primaryText="Turn Over" />

            </SelectField>
            <SelectField
              hintText="Event Zone"
              value={this.state.eventData.event_zone}
              onChange={(...event) => this.updateField('event_zone', event[selectionValue])}
            >
              <MenuItem value="AZ C-Point" primaryText="AZ C-Point" />
              <MenuItem value="AZ R-Point" primaryText="AZ R-Point" />
              <MenuItem value="AZ L-Point" primaryText="AZ L-Point" />
              <MenuItem value="AZ High Slot" primaryText="AZ High Slot" />
              <MenuItem value="AZ R High Slot" primaryText="AZ R High Slot" />
              <MenuItem value="AZ Left High Slot" primaryText="AZ Left High Slot" />
              <MenuItem value="AZ Slot" primaryText="AZ Slot" />
              <MenuItem value="AZ Low-Slot" primaryText="AZ Low-Slot" />
            </SelectField>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default EventForm;