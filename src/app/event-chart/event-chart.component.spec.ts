import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChartComponent } from './event-chart.component';

describe('EventChartComponent', () => {
  let component: EventChartComponent;
  let fixture: ComponentFixture<EventChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
