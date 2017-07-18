import React, {
  Component,
} from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (<div >
      <TextField
        hintText="Enter your Username"
        floatingLabelText="Username"
        onChange={
        (event, newValue) => this.setState({
          username: newValue,
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
        onClick={
        event => this.handleClick(event)
      }
      /> </div>
    );
  }
}
const style = {
  margin: 15,
};

export default Login;
