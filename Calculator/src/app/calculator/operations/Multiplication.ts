import {IOperation} from './IOperation';
export class Multiplication implements IOperation {
  operate(leftSide: number, rightSide: number): number {
    return leftSide * rightSide;
  }
}
