import React, { Component } from 'react';
import Request from 'superagent';
import AUTH_URL from '../server/server.js';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import style from '../styles/teams-table.css'

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: null,
      showCheckboxes: false,
      stripedRow: true,
      showRowHover: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    console.log('inside teams component will mount');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .get(`${AUTH_URL}api/${currentUser.userId}/teams`)
      .end((err, res) => {
        if (err) {
          console.log('something went wrong');
        }
        console.log(res.body, 'from succesful database query for Teams');
        this.setState({ tableData: res.body });
      });
  }

  handleClick(selectedRow) {
    this.props.history.push(`/app/1/list/teams/roster/${selectedRow.id}`)
  }

  render() {
    
    const dataReady = this.state.tableData;
    return (
      <div>
        {(dataReady) ?
          <Table>
            <TableHeader
              adjustForCheckbox={this.state.showCheckboxes}
              displaySelectAll={this.state.showCheckboxes}
            >
              <TableRow>
                <TableHeaderColumn>Team Name</TableHeaderColumn>
                <TableHeaderColumn>Location</TableHeaderColumn>
                <TableHeaderColumn>Arena</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={this.state.showCheckboxes}
              showRowHover={this.state.showRowHover}
            >
              {this.state.tableData.map(row => (
                <TableRow selectable={false} key={row.id} onClick={() => this.handleClick(row)}>
                  <TableRowColumn >{row.name}</TableRowColumn>
                  <TableRowColumn>{row.location}</TableRowColumn>
                  <TableRowColumn>{row.arena}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          : 
          <CircularProgress size={80} thickness={5} /> }
      </div>
    );
  }
}

export default Teams;
