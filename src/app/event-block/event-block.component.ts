import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-event-block',
  templateUrl: './event-block.component.html',
  styleUrls: ['./event-block.component.less']
})

export class EventBlockComponent implements OnInit {

@Input() name: string;
@Input() isAcceptedEvent:boolean;
@Input() notAcceptedEvent:boolean;
@Input() eventType: string;
@Input() participents : number;
@Input() eventAcceptExpiration : number;
@Input() eventDate: Date;
@Input() eventDetailPage: boolean;
@Input() infoBoxV2: string;
@Input() unpaid : boolean;
@Input() paid : boolean;
@Input() paidPrice: string;
@Input() unpaidPrice: string;

  	
  constructor() {

   }

  

  ngOnInit() {
    console.log(this.isAcceptedEvent);
     console.log(this.eventDate);
     
  }

}
