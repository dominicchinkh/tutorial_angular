import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableView } from './deferrable-view';

describe('DeferrableView', () => {
  let component: DeferrableView;
  let fixture: ComponentFixture<DeferrableView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableView],
    }).compileComponents();

    fixture = TestBed.createComponent(DeferrableView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
