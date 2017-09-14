import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { BrowserRouter, Route, NavLink, Link } from 'react-router-dom';
import Request from 'superagent';
import AUTH_URL from '../server/server';


class Seasons extends Component {
  constructor() {
    super();
    this.state = {
      showCheckboxes: false,
      stripedRow: true,
      showRowHover: true,
      tableData: [],
    };
  }
  componentWillMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser, 'loggin from Seasons component currentUser')
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
    this.props.history.push(`/app/${selectedRow.id}`)
  }
  render() {
    return (
      <div>
        <h1>Select a season to continue</h1>
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
      </div>
    );
  }
}
export default Seasons;
