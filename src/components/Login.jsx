
import React, { Component } from 'react';
import request from 'superagent';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import AUTH_URL from '../server/server';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    request
      .post(`${AUTH_URL}login`)
      .send(this.state)
      .end((err, res) => {
        localStorage.setItem('token', res.body);
      });
  }
  render() {
    return (<div className="login" >
      <h3>Please login to Continue</h3>
      <TextField
        hintText="Enter your email"
        floatingLabelText="email"
        onChange={
          (event, newValue) => this.setState({
            email: newValue,
          })
        }
      /> <br />
      <TextField
        type="password"
        hintText="Enter your Password"
        floatingLabelText="Password"
        onChange={
          (event, newValue) => this.setState({
            password: newValue,
          })
        }
      /> <br />
      <Button
        variant="raised"
        label="Submit"
        primary
        onClick={this.handleClick}
      /> </div>
    );
  }
}
const style = {
  margin: 15,
};

export default Login;
