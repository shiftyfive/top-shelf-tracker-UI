import React, { Component } from 'react';
import Request from 'superagent';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import '../styles/login.css'
import { Redirect } from 'react-router';
import AUTH_URL from '../server/server';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      shouldRedirect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    Request
      .post(`${AUTH_URL}login`)
      .send(this.state)
      .end((err, res) => {
        if (err) {
          console.log('something went wrong');
        }
        localStorage.setItem('currentUser', JSON.stringify(res.body));
        this.setState({ shouldRedirect: true });
      });
  }
  render() {
    return (
      this.state.shouldRedirect ?
        <Redirect to={'/app'} /> :
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
            onChange={
              (event, newValue) => this.setState({
                password: newValue,
              })
            }
          />
          <br />
          <Button
            variant="raised"
            label="Submit"
            primary
            onClick={this.handleClick}
          />
        </div>
    );
  }
}

export default Login;
