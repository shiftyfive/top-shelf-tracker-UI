import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';  
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Request from 'superagent';
import React, { Component } from 'react';
import AUTH_URL from '../server/server';

const selectionValue = 2;


class GameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      teamData: this.props.teamData,
      formData: {
      season_id: this.props.seasonId,
      home_team: null,
      away_team: null,
      date: null,
      start_time: '',
      }
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleChangeTimePicker12 = this.handleChangeTimePicker12.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOpen() {
    this.setState((state) => ({ open: true }));
  }

  handleClose() {
    this.setState(() => ({ open: false }));
  }

  updateField(field, value) {
    this.setState(state => ({
      formData: {
        ...this.state.formData,
        [field]: value,
      }
    }));
  }

  handleDateChange = (event, date) => {
    this.setState(state => ({
      formData: {
        ...this.state.formData,
        date: date,
      }
    }));
  };

  handleChangeTimePicker12 = (event, date) => {
    this.setState(state => ({
      formData: {
        ...this.state.formData,
        start_time: date,
      }
    }));
  };

  handleSubmit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .post(`${AUTH_URL}api/${currentUser.userId}/settings/game`)
      .send(this.state.formData)
      .end((err, res) => {
      });
    this.handleClose();
  }

  render(props) {
    console.log(this.state.teamData, 'logging this.state.teamDataa from gameform render')
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      console.log(this.props, 'logging this.props from gameForm'),
      <div className="game-form-container">
        <Button
          label="Add Game"
          onClick={this.handleOpen}
          primary
        />
        <Dialog
          title="Add Game"
          actions={actions}
          modal={false}
          open={this.state.open}
        >
        <div>
        <SelectField
        hintText="Home Team"
        value={this.state.formData.home_team}
        onChange={(...teamObj) => this.updateField('home_team', teamObj[selectionValue])}
        >
        {this.props.teamData.map(el => (
          <MenuItem value={el.id} primaryText={el.name} />
        ))}
        </SelectField>
        </div>
        <div>
        <SelectField
        hintText="Away Team"
        value={this.state.formData.away_team}
        onChange={(...event) => this.updateField('away_team', event[selectionValue])}
        >
        {this.props.teamData.map(el => (
          <MenuItem value={el.id} primaryText={el.name} />
        ))}
        </SelectField>
        </div>
          <div>
            <DatePicker
              hintText="Game Date"
              value={this.state.formData.date}
              onChange={this.handleDateChange}
            />
          </div>
          <div>
          <TextField 
          hintText="Start Time"
          value={this.state.formData.start_time}
          onChange={(event) => this.updateField('start_time', event.target.value)}
          />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default GameForm;
