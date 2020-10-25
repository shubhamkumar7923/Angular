import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempDrivenComponent } from './temp-driven.component';

describe('TempDrivenComponent', () => {
  let component: TempDrivenComponent;
  let fixture: ComponentFixture<TempDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempDrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
