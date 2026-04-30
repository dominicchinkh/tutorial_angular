import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutput } from './input-output';

describe('InputOutput', () => {
  let component: InputOutput;
  let fixture: ComponentFixture<InputOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(InputOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
