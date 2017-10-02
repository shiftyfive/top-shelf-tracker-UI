import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from 'material-ui/RaisedButton';
import Request from 'superagent';
import AUTH_URL from '../server/server';

class DeleteSeason extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }
  handleOpen() {
    this.setState((state) => ({ open: true }));
  }

  handleClose() {
    this.setState((state) => ({ open: false }));
  }

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
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Delete"
        secondary
        keyboardFocused={true}
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div className="delete-season-container">
      <Button
      label="Delete Season"
      onClick={this.handleOpen}
      secondary
      />
      <Dialog
      title="Delete Season"
      actions={actions}
      modal={false}
      open={this.state.open}
      >
      <h3>Warning this can not be undone are you sure?</h3>
      </Dialog>
      </div>
    )
  }
}

export default DeleteSeason;
