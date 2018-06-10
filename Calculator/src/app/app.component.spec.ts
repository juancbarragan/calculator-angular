import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CalculatorComponent,

      ],
    }).compileComponents();
  }));
});
