import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariable } from './template-variable';

describe('TemplateVariable', () => {
  let component: TemplateVariable;
  let fixture: ComponentFixture<TemplateVariable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVariable],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateVariable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
