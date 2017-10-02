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

const selectionValue = 2;

class PlayersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      teamData: this.props.teamData,
      formData: {
        team_id: null,
        first_name: '',
        last_name: '',
        jersey_number: null,
        position: '',
        age: null,
        height: '',
        weight: null,
        shoots: '',
      },
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
  }

  handleOpen() {
    this.setState(state => ({ open: true }));
  }

  handleClose() {
    this.setState(() => ({ open: false }));
  }

  updateField(field, value) {
    this.setState(state => ({
      formData: {
        ...this.state.formData,
        [field]: value,
      },
    }));
  }

  handleSubmit() {
    const submitData = this.state.formData;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .post(`${AUTH_URL}api/${currentUser.userId}/settings/player`)
      .send(submitData)
      .end((err, res) => {
      });
    this.handleClose();
  }

  render(props) {
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
      <div className="game-form-container">
        <Button
          label="Add Players"
          onClick={this.handleOpen}
          primary
        />
        <Dialog
          title="Add Players"
          actions={actions}
          modal={false}
          open={this.state.open}
        >
          <SelectField
            hintText="Select Players Team"
            value={this.state.formData.team_id}
            onChange={(...teamObj) => this.updateField('team_id', teamObj[selectionValue])}
          >
            {this.props.teamData.map(el => (
              <MenuItem value={el.id} primaryText={el.name} />
            ))}
          </SelectField>
          <SelectField
            hintText="Position"
            value={this.state.formData.position}
            onChange={(...playerObj) => this.updateField('position', playerObj[selectionValue])}
          >
            <MenuItem value="Centre" primaryText="Centre" />
            <MenuItem value="Defence" primaryText="Defence" />
            <MenuItem value="Left Wing" primaryText="Left Wing" />
            <MenuItem value="Right Wing" primaryText="Right Wing" />
          </SelectField>
          <SelectField
            hintText="Shoots"
            value={this.state.formData.shoots}
            onChange={(...playerObj) => this.updateField('shoots', playerObj[selectionValue])}
          >
            <MenuItem value="Left" primaryText="Left" />
            <MenuItem value="Right" primaryText="Right" />
          </SelectField>
          <div>
            <TextField
              hintText="First Name"
              value={this.state.formData.first_name}
              onChange={event => this.updateField('first_name', event.target.value)}
            />
            <TextField
              hintText="Last Name"
              value={this.state.formData.last_name}
              onChange={event => this.updateField('last_name', event.target.value)}
            />
          </div>
          <TextField
            hintText="Jersey Number"
            value={this.state.formData.jersey_number}
            onChange={event => this.updateField('jersey_number', event.target.value)}
          />
          <TextField
            hintText="Height"
            value={this.state.formData.height}
            onChange={event => this.updateField('height', event.target.value)}
          />
          <TextField
            hintText="Weight"
            value={this.state.formData.weight}
            onChange={event => this.updateField('weight', event.target.value)}
          />
          <TextField
            hintText="Age"
            value={this.state.formData.age}
            onChange={event => this.updateField('age', event.target.value)}
          />
        </Dialog>
      </div>
    );
  }
}

export default PlayersForm;
