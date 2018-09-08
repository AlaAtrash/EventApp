import { Component, OnInit } from '@angular/core';
import {AllEventsComponent}  from  '../all-events/all-events.component';
import {EventChartComponent} from '../event-chart/event-chart.component'

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.less']
})
export class MyAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
