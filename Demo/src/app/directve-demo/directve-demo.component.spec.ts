import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectveDemoComponent } from './directve-demo.component';

describe('DirectveDemoComponent', () => {
  let component: DirectveDemoComponent;
  let fixture: ComponentFixture<DirectveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
