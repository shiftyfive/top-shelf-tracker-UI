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

class TeamForm extends Component {
  constructor(props) {
    super(props);
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.state = {
      open: false,
      formData: {
        owner_id: currentUser.userId,
        name: '',
        location: '',
        arena: '',
      }
    }
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
      }
    }));
  }

  handleSubmit() {
    const submitData = this.state.formData;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .post(`${AUTH_URL}api/${currentUser.userId}/settings/team`)
      .send(submitData)
      .end((err, res) => {
      });
    this.handleClose();
  }

  render(props) {
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
      <div className="game-form-container">
        <Button
          label="Add Team"
          onClick={this.handleOpen}
          primary
        />
        <Dialog
          title="Add Team"
          actions={actions}
          modal={false}
          open={this.state.open}
        >
          <div>
            <TextField 
              hintText="Name"
              value={this.state.formData.name}
              onChange={(event) => this.updateField('name', event.target.value)}
            />
            <TextField 
              hintText="Location"
              value={this.state.formData.location}
              onChange={(event) => this.updateField('location', event.target.value)}
            />
            <TextField 
              hintText="Arena"
              value={this.state.formData.arena}
              onChange={(event) => this.updateField('arena', event.target.value)}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}

export default TeamForm;
