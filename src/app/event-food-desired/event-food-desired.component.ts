import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-food-desired',
  templateUrl: './event-food-desired.component.html',
  styleUrls: ['./event-food-desired.component.less']
})
export class EventFoodDesiredComponent implements OnInit {

  @Input() redWidthPercentage : number;	
  @Input() greenWidthPercentage : number;	
  constructor() {
  	this.redWidthPercentage = 70;
  	this.greenWidthPercentage = 30;
   }

  ngOnInit() {

  }

}
