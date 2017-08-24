
import React, { Component } from 'react';
import Request from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
    Request
      .post(`${AUTH_URL}login`)
      .send(this.state)
      .end((err, res) => {
        localStorage.setItem('token', res.body);
      });
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="login" >
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
          />
          <br />
          <Button
            variant="raised"
            label="Submit"
            primary
            onClick={this.handleClick}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Login;
