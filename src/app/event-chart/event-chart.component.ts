import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-event-chart',
  templateUrl: './event-chart.component.html',
  styleUrls: ['./event-chart.component.less']
})
export class EventChartComponent implements OnInit {

  @Input() subject : string;
  @Input() acctepted : number;
  @Input() waiting : number;
  @Input() rejected : number;
  @Input() total : number;	
  @Input() totalTitle : string;

  constructor() { }

  ngOnInit() {
  	this.total = this.acctepted + this.waiting + this.rejected;
  }

}
