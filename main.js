const team = {
    _players: [
      { firstName: 'Pablo', lastName: 'Sanchez', age: 23 },
      { firstName: 'Freddy', lastName: 'Noor', age: 38 },
      { firstName: 'Maria', lastName: 'Gonzales', age: 42 },
    ],
    
    get players () {
      return this._players;
    },
  
    _games: [
      { opponent: 'Knicks', teamPoints: 34, opponentPoints: 25 },
      { opponent: 'Spartan', teamPoints: 42, opponentPoints: 27 },
      { opponent: 'Mets', teamPoints: 55, opponentPoints: 60 },
    ],

    get games () {
      return this._games;
    },
  
    addPlayer (firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age,
      };
      this._players.push(player)
    },
  
    addGame (opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints,
      };
      this._games.push(game)
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  
  console.log(team.players)
  
  team.addGame('Knicks', 100, 200);
  team.addGame('Spartan', 70, 100);
  team.addGame('Mets', 90, 80);
  
  console.log(team.games)
