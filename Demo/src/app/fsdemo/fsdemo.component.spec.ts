import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FSDemoComponent } from './fsdemo.component';

describe('FSDemoComponent', () => {
  let component: FSDemoComponent;
  let fixture: ComponentFixture<FSDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FSDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FSDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
