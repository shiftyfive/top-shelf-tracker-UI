import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Request from 'superagent';
import AUTH_URL from '../server/server';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCheckboxes: false,
      stripedRow: true,
      selectable: false,
      showRowHover: true,
      height: '500px',
      tableData: [],
    };
  }
  componentWillMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.props.match.params.teamId) {
      Request
        .get(`${AUTH_URL}api/${currentUser.userId}/players/${this.props.match.params.teamId}`)
        .end((err, res) => {
          if (err) {
            console.log('something went wrong');
          }
          this.setState({ tableData: res.body });
        });
    } else {
      Request
        .get(`${AUTH_URL}api/${currentUser.userId}/players`)
        .end((err, res) => {
          if (err) {
            console.log('something went wrong');
          }
          this.setState({ tableData: res.body });
        });
    }
  }
  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          selectable={this.state.selectable}
          showRowHover={this.state.showRowHover}
        >
          <TableHeader
            adjustForCheckbox={this.state.showCheckboxes}
            displaySelectAll={this.state.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn>First Name</TableHeaderColumn>
              <TableHeaderColumn>Last Name</TableHeaderColumn>
              <TableHeaderColumn>Goals</TableHeaderColumn>
              <TableHeaderColumn>Asissts</TableHeaderColumn>
              <TableHeaderColumn>Points</TableHeaderColumn>
              <TableHeaderColumn>Shots</TableHeaderColumn>
              <TableHeaderColumn>Shooting %</TableHeaderColumn>
              <TableHeaderColumn>Hits</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            showRowHover={this.state.showRowHover}
          >
            {this.state.tableData.map(row => (
              <TableRow adjustForCheckbox={false} selectable={false} key={row.row.id}>
                <TableRowColumn>{row.row.first_name}</TableRowColumn>
                <TableRowColumn>{row.row.last_name}</TableRowColumn>
                <TableRowColumn>{row.row.events.goals}</TableRowColumn>
                <TableRowColumn>{row.row.events.assists}</TableRowColumn>
                <TableRowColumn>{row.row.events.points}</TableRowColumn>
                <TableRowColumn>{row.row.events.shots}</TableRowColumn>
                <TableRowColumn>{row.row.events.shootingPercentage}</TableRowColumn>
                <TableRowColumn>{row.row.events.hits}</TableRowColumn>
              </TableRow>
            ))}
          }
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Players;
