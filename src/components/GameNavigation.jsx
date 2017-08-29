import Request from 'superagent';
import React, { Component } from 'react';
import Button from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
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


class GameNavigation extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
    };
  }

  handleChange(value) {
    this.setState(() => ({ activeTabIndex: value }));
  }

  handleClick() {
    Request
      .post(`${AUTH_URL}login`)
      .send(this.state)
      .end((err, res) => {

      });
  }

  // componentWillMount() {
  //   const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   Request
  //     .get(`${AUTH_URL}api/${currentUser.userid}/games/${this.props.match.params.seasonId}/`)
  //     .end((err, res) => {
  //       if(err) {
  //         console.log('something went wrong on the gamesList mount');
  //       }
  //       this.setState({ games: res.body });
  //     });
  // }

  render() {
    return (
      console.log(this.props.match, 'game overlay props'),
      <div>
        <Tabs>
          <Tab label="Period 1" >
            <div>
              <h2 style={styles.headline}>Period 1</h2>
              <EventList />
              <Button
                variant="raised"
                label="Add Event"
                primary
                onClick={this.handleClick}
              />
            </div>
          </Tab>
          <Tab label="Period 2" >
            <div>
              <EventList />
              <Button
                variant="raised"
                label="Add Event"
                primary
                onClick={this.handleClick}
              />
            </div>
          </Tab>
          <Tab label="Period3">
            <div>
              <h2 style={styles.headline}>Period 3</h2>
              <EventList />
              <Button
                variant="raised"
                label="Add Event"
                primary
                onClick={this.handleClick}
              />
            </div>
          </Tab>
          <Tab label="OT">
            <div>
              <h2 style={styles.headline}>OT</h2>
              <Button
                variant="raised"
                label="Add Event"
                primary
                onClick={this.handleClick}
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}


export default GameNavigation;
