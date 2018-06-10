import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalculatorComponent} from './calculator.component';
import {CalculatorButtonComponent} from '../calculator-button/calculator-button.component';

describe('CalculatorComponent', () => {
  let calculatorComponent: CalculatorComponent;
  let calculatorFixture: ComponentFixture<CalculatorComponent>;

  let button0: CalculatorButtonComponent;
  let button1: CalculatorButtonComponent;
  let button2: CalculatorButtonComponent;
  let button3: CalculatorButtonComponent;
  let button4: CalculatorButtonComponent;
  let button5: CalculatorButtonComponent;
  let button6: CalculatorButtonComponent;
  let button7: CalculatorButtonComponent;
  let button8: CalculatorButtonComponent;
  let button9: CalculatorButtonComponent;

  let buttonPlus: CalculatorButtonComponent;
  let buttonSubstract: CalculatorButtonComponent;
  let buttonDivide: CalculatorButtonComponent;
  let buttonMultiply: CalculatorButtonComponent;
  let buttonEqual: CalculatorButtonComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent, CalculatorButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    calculatorFixture = TestBed.createComponent(CalculatorComponent);
    calculatorComponent = calculatorFixture.componentInstance;
    calculatorFixture.detectChanges();

    buttonPlus = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    buttonPlus.text = '+';
    buttonPlus.buttonType = 'OPERATION';

    buttonSubstract = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    buttonSubstract.text = '-';
    buttonSubstract.buttonType = 'OPERATION';

    buttonDivide = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    buttonDivide.text = '/';
    buttonDivide.buttonType = 'OPERATION';

    buttonMultiply = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    buttonMultiply.text = '*';
    buttonMultiply.buttonType = 'OPERATION';

    buttonSubstract = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    buttonSubstract.text = '-';
    buttonSubstract.buttonType = 'OPERATION';

    buttonEqual = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    buttonEqual.text = '=';
    buttonEqual.buttonType = 'RESULT';

    button1 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button1.text = '1';
    button1.buttonType = 'NUMBER';

    button2 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button2.text = '2';
    button2.buttonType = 'NUMBER';

    button3 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button3.text = '3';
    button3.buttonType = 'NUMBER';

    button4 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button4.text = '4';
    button4.buttonType = 'NUMBER';

    button5 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button5.text = '5';
    button5.buttonType = 'NUMBER';

    button6 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button6.text = '6';
    button6.buttonType = 'NUMBER';

    button7 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button7.text = '7';
    button7.buttonType = 'NUMBER';

    button8 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button8.text = '8';
    button8.buttonType = 'NUMBER';

    button9 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button9.text = '9';
    button9.buttonType = 'NUMBER';

    button0 = TestBed.createComponent(CalculatorButtonComponent).componentInstance;
    button0.text = '0';
    button0.buttonType = 'NUMBER';
  });

  it('should create', () => {
    expect(calculatorComponent).toBeTruthy();
  });

  it('Try a simple 11+12=23 to warm up', () => {

    calculatorComponent.keyPressed(button1);

    // What the calculator displays
    expect(calculatorComponent.display).toBe('1');
    // The Buffer
    expect(calculatorComponent.buffer).toBe('1');

    calculatorComponent.keyPressed(button1);
    expect(calculatorComponent.display).toBe('11');
    expect(calculatorComponent.buffer).toBe('11');

    calculatorComponent.keyPressed(buttonPlus);
    expect(calculatorComponent.display).toBe('11 (+) ');
    expect(calculatorComponent.buffer).toBe('');
    expect(calculatorComponent.leftSide).toBe(11);

    calculatorComponent.keyPressed(button1);
    calculatorComponent.keyPressed(button2);
    expect(calculatorComponent.display).toBe('11 (+) 12');
    expect(calculatorComponent.buffer).toBe('12');

    // Now press the equal
    calculatorComponent.keyPressed(buttonEqual);
    expect(calculatorComponent.display).toBe('23 (=) ');
  });

  it('Try 50 / 2 = + 2 + 1 equals 28 just to try something complex', () => {
    calculatorComponent.keyPressed(button5);
    calculatorComponent.keyPressed(button0);
    calculatorComponent.keyPressed(buttonDivide);
    calculatorComponent.keyPressed(button2);
    calculatorComponent.keyPressed(buttonEqual);
    expect(calculatorComponent.display).toBe('25 (=) ');

    // Left Side
    expect(calculatorComponent.leftSide).toBe(25);

    calculatorComponent.keyPressed(buttonPlus);
    expect(calculatorComponent.display).toBe('25 (+) ');
    calculatorComponent.keyPressed(button2);
    expect(calculatorComponent.display).toBe('25 (+) 2');

    // Left Side
    expect(calculatorComponent.leftSide).toBe(25);
    // Right Side
    expect(calculatorComponent.rightSide).toBe(2);

    calculatorComponent.keyPressed(buttonPlus);
    expect(calculatorComponent.leftSide).toBe(27, 'left side does not match');
    expect(calculatorComponent.display).toBe('27 (+) ');
    expect(calculatorComponent.buffer).toBe('', 'buffer does not match');

    calculatorComponent.keyPressed(button1);
    expect(calculatorComponent.display).toBe('27 (+) 1');
    calculatorComponent.keyPressed(buttonEqual);
    expect(calculatorComponent.display).toBe('28 (=) ');
  });
});
