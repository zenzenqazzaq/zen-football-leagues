# zen-football-leagues

`zen-football-leagues` is a Node.js library for managing football leagues. It provides functionalities to create and manage football leagues, teams, fixtures, and match results.

## Features

- **League Management**: Create and manage football leagues.
- **Team Management**: Add, remove, and manage teams within a league.
- **Fixture Generation**: Automatically generate fixtures for league matches.
- **Match Results**: Record and manage match results.


## Installation

You can install this package via npm:

```bash
npm install zen-football-leagues
```

## Usage
In your Node.js code, you can use the provided functions to fetch and display random cat images:

```bash
const FootballLeague = require('zen-football-leagues');

// Create a new football league
const premierLeague = new FootballLeague('Premier League');

// Add teams to the league
premierLeague.addTeam('Manchester United');
premierLeague.addTeam('Chelsea');
premierLeague.addTeam('Liverpool');

// Get all teams in the league
const teams = premierLeague.getTeams();
console.log('Teams in Premier League:', teams);
```

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Support
If you encounter any issues or have questions about using the Weather Library, please open an issue on GitHub.
