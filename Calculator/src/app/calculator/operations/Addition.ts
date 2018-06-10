import {IOperation} from './IOperation';
export class Addition implements IOperation {
  operate(leftSide: number, rightSide: number): number {
    return leftSide + rightSide;
  }
}
