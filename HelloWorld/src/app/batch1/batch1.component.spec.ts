import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Batch1Component } from './batch1.component';

describe('Batch1Component', () => {
  let component: Batch1Component;
  let fixture: ComponentFixture<Batch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Batch1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Batch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
