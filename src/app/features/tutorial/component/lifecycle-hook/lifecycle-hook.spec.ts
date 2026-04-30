import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHook } from './lifecycle-hook';

describe('LifecycleHook', () => {
  let component: LifecycleHook;
  let fixture: ComponentFixture<LifecycleHook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleHook],
    }).compileComponents();

    fixture = TestBed.createComponent(LifecycleHook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
