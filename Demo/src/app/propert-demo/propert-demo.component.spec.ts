import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertDemoComponent } from './propert-demo.component';

describe('PropertDemoComponent', () => {
  let component: PropertDemoComponent;
  let fixture: ComponentFixture<PropertDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
