import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForNonGovtEmployeeComponent } from './form-for-non-govt-employee.component';

describe('FormForNonGovtEmployeeComponent', () => {
  let component: FormForNonGovtEmployeeComponent;
  let fixture: ComponentFixture<FormForNonGovtEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormForNonGovtEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForNonGovtEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
