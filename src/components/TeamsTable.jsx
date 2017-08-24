import React, { Component,} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow,TableRowColumn, } from 'material-ui/Table';

const TeamsTable = (props) => {
  return(
    <Table> 
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Head Coach</TableHeaderColumn>
          <TableHeaderColumn>Rank</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableRowColumn>{props.teamName}</TableRowColumn>
          <TableRowColumn>{props.headCoach}</TableRowColumn>
          <TableRowColumn>{props.rank}</TableRowColumn>
        </TableRow>
      </TableBody>
  </Table>
  )
}