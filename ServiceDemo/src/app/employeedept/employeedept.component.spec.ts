import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeedeptComponent } from './employeedept.component';

describe('EmployeedeptComponent', () => {
  let component: EmployeedeptComponent;
  let fixture: ComponentFixture<EmployeedeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeedeptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
