import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from 'material-ui/RaisedButton';
import Request from 'superagent';
import AUTH_URL from '../server/server';

class DeleteGame extends Component {
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
    console.log(this.props)
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .delete(`${AUTH_URL}api/${currentUser.userId}/settings/games/${this.props.game_id}`)
      .send(this.state.formData)
      .end((err, res) => {
      });
      this.handleClose();
      window.location.reload(true)
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
      label="Delete"
      onClick={this.handleOpen}
      secondary
      />
      <Dialog
      title="Delete Game"
      actions={actions}
      modal={false}
      open={this.state.open}
      >
      <h5>Warning this can not be undone are you sure?</h5>
      </Dialog>
      </div>
    )
  }
}

export default DeleteGame;
