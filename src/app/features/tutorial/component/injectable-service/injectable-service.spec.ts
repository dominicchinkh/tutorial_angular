import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableService } from './injectable-service';

describe('InjectableService', () => {
  let component: InjectableService;
  let fixture: ComponentFixture<InjectableService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectableService],
    }).compileComponents();

    fixture = TestBed.createComponent(InjectableService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
