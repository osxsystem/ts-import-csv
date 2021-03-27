import { WinsAnalysis } from './analyzer/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { ConsoleReport } from './report/ConsoleReport';

const reader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(reader)
matchReader.load();

console.log(matchReader.matches[0]);

const winsAnalysis = new WinsAnalysis('Man United');
const consoleReport = new ConsoleReport();
const summary = new Summary(winsAnalysis, consoleReport);

summary.buildAndPrintReport(matchReader.matches);