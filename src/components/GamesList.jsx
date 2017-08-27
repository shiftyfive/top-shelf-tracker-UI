import React, { Component } from 'react';
import Request from 'superagent';
import GameCard from './GameCard';
import AUTH_URL from '../server/server';


const GamesList = (props) => {
  console.log(props)
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
      games: [
        {
          date: '10-20-2017',
          game_id: 1,
          teams: [
            {
              arena: 'pizza pizza rena',
              id: 1,
              league_id: 1,
              location: 'Detroit',
              name: 'Red Wings',
            },
            {
              arena: 'United Center',
              id: 2,
              league_id: 1,
              location: 'Chicago',
              name: 'Blackhawks',
            },
          ],
          time: '12:30 PM',
        },
        {
          date: '11-3-2017',
          game_id: 2,
          teams: [
            {
              arena: 'pizza pizza rena',
              id: 1,
              league_id: 1,
              location: 'Detroit',
              name: 'Red Wings',
            },
            {
              arena: 'CONSOL Energy Center',
              id: 3,
              league_id: 1,
              location: 'Pitsburgh',
              name: 'Penguins',
            },
          ],
          time: '6:00 PM',
        },
        {
          date: '7-1-2017',
          game_id: 3,
          teams: [
            {
              arena: 'old barn center',
              id: 4,
              league_id: 2,
              location: 'Bridgeport',
              name: 'Soundtigers',
            },
            {
              arena: 'Essar Centre',
              id: 5,
              league_id: 2,
              location: 'Sault Ste. Marie',
              name: 'Greyhounds',
            },
          ],
          time: '6:30 PM',
        },
      ],
    };
  }

  componentWillMount() {
    Request
    .post(`${AUTH_URL}`)`
  }

  render() {
    return (
      <div>
        <GamesList games={this.state.games} />
      </div>
    );
  }
}

export default GameList;
