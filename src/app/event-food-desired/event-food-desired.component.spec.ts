import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFoodDesiredComponent } from './event-food-desired.component';

describe('EventFoodDesiredComponent', () => {
  let component: EventFoodDesiredComponent;
  let fixture: ComponentFixture<EventFoodDesiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventFoodDesiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFoodDesiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
