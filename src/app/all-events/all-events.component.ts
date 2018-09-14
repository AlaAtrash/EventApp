import { Component, OnInit, Input} from '@angular/core';
import {EventDetailComponent} from '../event-detail/event-detail.component';
import {EventChartComponent} from '../event-chart/event-chart.component';
import {EventFoodDesiredComponent} from '../event-food-desired/event-food-desired.component'
import {MainIngredientComponent} from '../main-ingredient/main-ingredient.component'



@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.less']
})


export class AllEventsComponent implements OnInit {
  @Input() showEventDetail :boolean;
  	

  constructor() { }

  ngOnInit() {

  }

}
