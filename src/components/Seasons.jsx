import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import Button from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import Request from 'superagent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AUTH_URL from '../server/server';

class Seasons extends Component {
  constructor(props) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    super(props);
    this.state = {
      open: false,
      showCheckboxes: false,
      stripedRow: true,
      showRowHover: true,
      tableData: [],
      formData: {
        owner_id: currentUser.userId,
        league_name: '',
        season_start: '',
        season_end: '',
      },
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .get(`${AUTH_URL}api/${currentUser.userId}`)
      .end((err, res) => {
        if (err) {
          console.log('something went wrong');
        }
        this.setState({ tableData: res.body });
      });
  }

  handleClick(selectedRow) {
    this.props.history.push(`/app/${selectedRow.id}`);
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
  handleChange1(event, date) {
    this.setState(state => ({
      formData: {
        ...this.state.formData,
        season_start: date,
      },
    }));
  }

  handleChange2(event, date) {
    this.setState(state => ({
      formData: {
        ...this.state.formData,
        season_end: date,
      },
    }));
  }

  handleSubmit(props) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const formObj = this.state.formData;
    console.log(currentUser);
    Request
      .post(`${AUTH_URL}api/${currentUser.userId}`)
      .send(this.state.formData)
      .end((err, res) => {
        if (err) {
          console.log('something went wrong during handle submit');
        }
        this.setState({ tableData: [...this.state.tableData, formObj]});
        this.handleClose();
      });
  }

  render(props) {
    const dataReady = JSON.parse(localStorage.getItem('currentUser'))
    const actions = [
      <Button
        label="Cancel"
        primary
        onClick={this.handleClose}
      />,
      <Button
        label="Add"
        primary
        keyboardFocused
        onClick={this.handleSubmit}
      />,
    ];
    return (
      <div>
        <h1>Select a season to continue</h1>
        <Dialog
          title="Add Season"
          actions={actions}
          modal={false}
          open={this.state.open}
        >
          <div>
            <TextField
              hintText="League Name"
              value={this.state.formData.league_name}
              onChange={event => this.updateField('league_name', event.target.value)}
            />
            <DatePicker
              hintText="Start Date"
              container="inline"
              mode="landscape"
              onChange={this.handleChange1}
            />
            <DatePicker
              hintText="End Date"
              container="inline"
              mode="landscape"
              onChange={this.handleChange2}
            />
          </div>
        </Dialog>
        <Table>
          <TableHeader
            adjustForCheckbox={this.state.showCheckboxes}
            displaySelectAll={this.state.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn>League Name</TableHeaderColumn>
              <TableHeaderColumn>Season Start</TableHeaderColumn>
              <TableHeaderColumn>Season End</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            showRowHover={this.state.showRowHover}
          >
            {this.state.tableData.map(row => (
              <TableRow selectable={false} key={row.id} onClick={() => this.handleClick(row)} >
                <TableRowColumn>{row.league_name}</TableRowColumn>
                <TableRowColumn>{row.season_start}</TableRowColumn>
                <TableRowColumn>{row.season_end}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          primary
          label="Create Season"
          onClick={this.handleOpen}
          style={{
            marginBottom: '10px',
            marginTop: '10px',
            marginLeft: '65%',
          }}
        />
      </div>
    );
  }
}
export default Seasons;
