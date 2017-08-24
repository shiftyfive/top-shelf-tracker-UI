import React, { Component,} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow,TableRowColumn, } from 'material-ui/Table';


const Player = (props) => {
  return(
    <Table>
      <TableHeader>
        <TableRow>
          <tableHeaderColumn>Season</tableHeaderColumn>
          <tableHeaderColumn>G</tableHeaderColumn>
          <tableHeaderColumn>A</tableHeaderColumn>
          <tableHeaderColumn>P</tableHeaderColumn>
          <tableHeaderColumn>+/-</tableHeaderColumn>
          <tableHeaderColumn>H</tableHeaderColumn>
        </TableRow>
      </TableHeader>
    </Table>
  )
}