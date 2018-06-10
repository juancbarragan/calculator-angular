import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {ButtonType} from '../calculator/button-type';
import { OperationType } from '../calculator/operation-type';

@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.css']
})
export class CalculatorButtonComponent implements OnInit {

  @Input() text: string;
  @Input() operationType: OperationType;
  @Input() buttonType: ButtonType;
  @Output() outputToParent = new EventEmitter<CalculatorButtonComponent>();

  constructor() {}

  ngOnInit() {
  }

  pressedKey(event) {
    this.outputToParent.emit(this);
  }

}
