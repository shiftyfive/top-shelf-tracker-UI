import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'material-ui'
import Request from 'superagent';
import React, { Component } from 'react';
import AUTH_URL from '../server/server';
const selectionValue = 2;

injectTapEventPlugin();

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      playerName: '',
      type: '',
      result: '',
      zone: '',
      time: '',
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleOpen() {
    this.setState(() => ({ open: true }));
  }

  handleClose() {
    this.setState(() => ({ open: false }));
  }

  updateField(field, value) {
    this.setState(() => ({ [field]: value }));
  }


  handleSubmit() {
    this.setState(() => ({ open: false }));
  }

  render() {
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
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Add Event" onClick={this.handleOpen} />
        <Dialog
          title="Add Event"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div className="event-form">
            <TextField
              hintText="enter player name"
              onChange={event => this.updateField('playerName', event.target.value)}
            />
            <SelectField
              hintText="Event Type"
              value={this.state.type}
              onChange={(...event) => this.updateField('type', event[selectionValue])}
            >
              <MenuItem value="shot">Shot</MenuItem>
              <MenuItem value="pass">pass</MenuItem>
            </SelectField>
            <SelectField
              hintText="Event Result"
              value={this.state.result}
              onChange={(...event) => this.updateField('result', event[selectionValue])}
            >
              <MenuItem value="goal">Goal</MenuItem>
              <MenuItem value="turn over">Turn Over</MenuItem>
            </SelectField>
            <SelectField
              hintText="zone"
              value={this.state.zone}
              onChange={(...event) => this.updateField('zone', event[selectionValue])}
            >
              <MenuItem value="sassyPup">sassy pup</MenuItem>
            </SelectField>
            <TextField
              hintText="Event Time"
              value={this.state.time}
              onChange={event => this.updateField('type', event.target.value)}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default EventForm;
