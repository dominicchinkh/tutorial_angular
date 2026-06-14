import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApexChart } from './candle-stick';

describe('ApexChart', () => {
  let component: ApexChart;
  let fixture: ComponentFixture<ApexChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApexChart],
    }).compileComponents();

    fixture = TestBed.createComponent(ApexChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
