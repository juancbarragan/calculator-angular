import {IOperation} from './IOperation';
export class Division implements IOperation {
  operate(leftSide: number, rightSide: number): number {
    return leftSide / rightSide;
  }
}
