import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivfromComponent } from './reactivfrom.component';

describe('ReactivfromComponent', () => {
  let component: ReactivfromComponent;
  let fixture: ComponentFixture<ReactivfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivfromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
