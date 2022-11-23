const team = {
    _players : [
      {firstName: 'Milana', lastName: 'Zab', age: 17}, 
      {firstName: 'Molly', lastName: 'random', age:18},
      {firstName: 'Nate', lastName: 'Jacobs', age:18}],
    _games : [
      {opponent: 'South', teamPoints: 7, opponentPoints: 2},
      {opponent: 'West', teamPoints: 3, opponentPoints: 5},
      {opponent: 'East', teamPoints: 6, opponentPoints: 1}
    ],
    get players() {
      return self._players;
    },
    get games() {
      return self._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName : newFirstName,
        lastName : newLastName,
        age : newAge,
      };
      this._players.push(player);
    } ,
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints : newOpponentPoints,
      };
      this._games.push(game);
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  
  team.addGame('Titans', 7, 2);
  console.log(team._games);