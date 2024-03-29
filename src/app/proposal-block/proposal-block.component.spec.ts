import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalBlockComponent } from './proposal-block.component';

describe('ProposalBlockComponent', () => {
  let component: ProposalBlockComponent;
  let fixture: ComponentFixture<ProposalBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
