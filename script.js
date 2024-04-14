'use-strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.25,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
let [gk, ...fieldPlayers] = [players1];
let allPlayers = [...players1, ...players2];
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
let {odds: {team1, x: draw, team2}} = game;

function printGoals(...players){
  console.log(`${players.length} goals were scored`);
  for(let i = 0; i < players.length; i++){
    console.log(`${players[i]} scored the ${i + 1} goal`);
  }
}

// printGoals(...game.scored);
// who wins depending on the odds, lower odds === higher chance of winning
console.log(team1 < team2 && 'team 1 is likely to win' || team1 === team2 && 'draw' || 'team 2 is likely to win');
