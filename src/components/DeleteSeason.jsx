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
    window.location.reload(true)
    this.props.history.push({
      pathname: '/app',
    });
    Request
      .delete(`${AUTH_URL}api/${currentUser.userId}/settings/season/${this.props.seasonId}`)
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
      console.log(this.props.history, 'logging this.props/history from deleteSeason'),
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
      <h5>Warning this can not be undone are you sure?</h5>
      </Dialog>
      </div>
    )
  }
}

export default DeleteSeason;
