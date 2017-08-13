import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Button from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/MenuItem';
const selectionValue = 2;

injectTapEventPlugin();

class EventForm extends Component {
  constructor(props) {
    super(props);
    this.updateField = this.updateField.bind(this);
    this.state = {
      playerName: '',
      type: '',
      result: '',
      zone: '',
      time: '',
    };
  }

  updateField(field, value) {
    this.setState(() => ({ [field]: value }));
  }

  render() {
    return (
      <MuiThemeProvider>
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
            onChange={(event) => this.updateField('type', event.target.value)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default EventForm;
