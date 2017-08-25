import Request from 'superagent';
import React, { Component } from 'react';
import Button from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import MuiThemeProvider from 'material-ui/styles/';
import EventList from './EventList';
import AUTH_URL from '../server/server';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};


function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

class GameNavigation  extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      activeTabIndex: 0,
    };
  }

  handleChange(value) {
    this.setState(() => ({ activeTabIndex: value}));
  }

  handleClick() {
    Request
      .post(`${AUTH_URL}login`)
      .send(this.state)
      .end((err, res) => {

      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Tabs>
          <Tab label="Period 1" >
            <div>
              <h2 style={styles.headline}>Period 1</h2>
              <EventList />
            </div>
          </Tab>
          <Tab label="Period 2" >
            <div>
              <EventList />
            </div>
          </Tab>
          <Tab label="Period3">
            <div>
              <h2 style={styles.headline}>Period 3</h2>
              <EventList />
            </div>
          </Tab>
          <Tab label="OT">
            <div>
              <h2 style={styles.headline}>OT</h2>
              <p>test</p>
              <Button
                variant="raised"
                label="Add Event"
                primary
                onClick={this.handleClick}
              />
            </div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}


export default GameNavigation;
