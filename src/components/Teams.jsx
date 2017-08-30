import React, { Component } from 'react';
import Request from 'superagent';
import AUTH_URL from '../server/server.js';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
    console.log('inside teams component will mount')
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .get(`${AUTH_URL}api/${currentUser.userId}/teams/${currentUser.userId}`)
      .end((err, res) => {
        if (err) {
          console.log('something went wrong');
        }
        console.log(res.body, 'from succesful database query for Teams')
        this.setState({ tableData: res.body });
      });
  }
  render() {
    return (
      console.log(this.state, 'from teams component render'),
      <div>
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
              <TableRow key={row.id}>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.location}</TableRowColumn>
                <TableRowColumn>{row.arena}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Teams