import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.less']
})
export class OrderListComponent implements OnInit {
  
  @Input() shopname : string;	
  constructor() { }

  ngOnInit() {
  }

}
