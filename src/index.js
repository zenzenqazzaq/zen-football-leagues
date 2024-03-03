const { roundNumber } = require('zen-round-number');
class FootballLeague {
    constructor(name) {
      this.name = name;
      this.teams = [];
    }
  
    addTeam(team) {
      this.teams.push(team);
        const a = roundNumber(2,55);
        console.log(a)
    }
  
    getTeams() {
      return this.teams;
    }
  }
  
  module.exports = FootballLeague;
  
