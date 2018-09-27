import { Component, OnInit } from '@angular/core';
import {ProposalBlockComponent} from '../proposal-block/proposal-block.component';
import {MenuDetailsComponent} from '../menu-details/menu-details.component';
import {PersonalBudgetComponent} from '../personal-budget/personal-budget.component'


@Component({
  selector: 'app-event-proposal',
  templateUrl: './event-proposal.component.html',
  styleUrls: ['./event-proposal.component.less']
})
export class EventProposalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
