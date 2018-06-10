import {IOperation} from './IOperation';
export class Substraction implements IOperation {
  operate(leftSide: number, rightSide: number): number {
    return leftSide - rightSide;
  }
}
