
class FootballLeague {
    constructor(name) {
      this.name = name;
      this.teams = [];
    }
  
    addTeam(team) {
      this.teams.push(team);

    }
  
    getTeams() {
      return this.teams;
    }
  }
  
  module.exports = FootballLeague;
  