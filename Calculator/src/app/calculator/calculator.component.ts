import {ButtonType} from './button-type';
import {CalculatorButtonComponent} from '../calculator-button/calculator-button.component';
import {OperationType} from './operation-type';
import {Addition} from './operations/Addition';
import {Division} from './operations/Division';
import {Multiplication} from './operations/Multiplication';
import {Substraction} from './operations/Substraction';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  display: string;
  buffer: string;
  leftSide: number;
  rightSide: number;
  clearDisplay: boolean;
  currentOperation: OperationType;
  lastKey: ButtonType;

  constructor() {}

  ngOnInit() {
    this.display = '0';
    this.buffer = '';
    this.leftSide = null;
    this.rightSide = null;
    this.clearDisplay = false;
    this.currentOperation = null;
  }

  keyPressed(button: CalculatorButtonComponent) {
    console.log('Operation type ' + button.operationType);
    if (this.clearDisplay) {
      this.display = '';
      this.clearDisplay = false;
    }

    switch (button.buttonType) {
      case 'CLEAR':
        this.doClearOperation();
        break;
      case 'NUMBER':
        this.doNumberPressed(button);
        break;
      case 'RESULT':
      case 'OPERATION':
        this.doOperation(button);
        break;
    }

    this.lastKey = button.buttonType;
  }

  private doOperation(button: CalculatorButtonComponent) {

    console.log('button type is operation');

    // Check if last key was an operation
    if (this.lastKey === 'OPERATION' || this.lastKey === 'RESULT') {
      console.log('last key was an operation');
      this.display = this.leftSide + ' (' + button.text + ') ';
      this.lastKey = button.buttonType;
      this.buffer = '';
      this.currentOperation = button.operationType;
      return;
    }

    if (this.leftSide === null) {
      console.log('left side is null');
      this.leftSide = Number.parseFloat(this.buffer);
      this.rightSide = null;
      this.display = this.display + ' (' + button.text + ') ';
      this.buffer = '';
    } else {
      this.rightSide = Number.parseFloat(this.buffer);

      console.log('left side: ' + this.leftSide);
      console.log('right side: ' + this.rightSide);
      console.log('1. this.currentOperation: ' + this.currentOperation);
      let result = 0;

      // Switch operation here
      if (this.currentOperation != null) {
        switch (this.currentOperation.valueOf()) {
          case 'ADDITION':
            result = new Addition().operate(this.leftSide, this.rightSide);

            break;
          case 'SUBSTRACTION':
            result = new Substraction().operate(this.leftSide, this.rightSide);

            break;
          case 'MULTIPLICATION':
            result = new Multiplication().operate(this.leftSide, this.rightSide);

            break;
          case 'DIVISION':
            result = new Division().operate(this.leftSide, this.rightSide);

            break;
          case 'EQUAL':
            console.log('equal operation');
            break;
        }
      }

      this.display = result.toString();
      this.leftSide = result;
      this.display = this.display + ' (' + button.text + ') ';
      this.buffer = '';
    }


    this.currentOperation = button.operationType;
  }

  private doClearOperation() {
    this.display = '';
    this.currentOperation = null;
    this.leftSide = null;
    this.rightSide = null;
    this.buffer = '';
  }

  private doNumberPressed(button: CalculatorButtonComponent) {
    if (this.lastKey === 'RESULT') {
      this.display = '';
      this.buffer = '';
      this.leftSide = null;
      this.rightSide = null;
    }

    if (this.display === '0') {
      this.display = '';
    }

    this.display = this.display + button.text;
    this.buffer = this.buffer + button.text;
  }

  private numberWithCommas(numberToFormat: number): string {
    const parts = numberToFormat.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

}
