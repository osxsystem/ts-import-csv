import { OutputTarget } from '../Summary';

export class Reportable implements OutputTarget {
  print(report: string): void {
    throw new Error('Method not implemented.');
  }

}

export class ConsoleReport extends Reportable {
  print(report: string): void {
    console.log(report);
  }
}