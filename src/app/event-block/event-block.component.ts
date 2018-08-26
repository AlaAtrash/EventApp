import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-block',
  templateUrl: './event-block.component.html',
  styleUrls: ['./event-block.component.less']
})

export class EventBlockComponent implements OnInit {

  name: string;
  eventType: string;
  eventDate: Date;
  participents : number;
  	
  constructor() { }

  ngOnInit() {
  }

}
