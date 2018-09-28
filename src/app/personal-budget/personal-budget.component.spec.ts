import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBudgetComponent } from './personal-budget.component';

describe('PersonalBudgetComponent', () => {
  let component: PersonalBudgetComponent;
  let fixture: ComponentFixture<PersonalBudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
