import React, { Component } from 'react';
import Request from 'superagent';
import GameCard from './GameCard';
import AUTH_URL from '../server/server';


const GamesList = (props) => {
  return (
    <div>
      {props.games.map(game => <GameCard {...game} />)}
    </div>
  )
}

class GameList extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }

  componentWillMount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Request
      .get(`${AUTH_URL}api/${currentUser.userid}/games/${this.props.match.params.seasonId}`)
      .end((err, res) => {
        if(err) {
          console.log('something went wrong on the gamesList mount');
        }
        this.setState({ games: res.body });
      });
  }

  render() {
    return (
      console.log(this.props, 'from GameList render function'),
      <div key={this.props.game_id}>
        <GamesList games={this.state.games} />
      </div>
    );
  }
}

export default GameList;
