import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();
console.log(reader.data[0]);

let manUWins = 0;

for(let match of reader.data) {
  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUWins++;
  } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUWins++;
  }
}

console.log(manUWins);
