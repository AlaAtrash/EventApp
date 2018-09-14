import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIngredientComponent } from './main-ingredient.component';

describe('MainIngredientComponent', () => {
  let component: MainIngredientComponent;
  let fixture: ComponentFixture<MainIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
