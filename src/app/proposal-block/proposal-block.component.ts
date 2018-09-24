import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proposal-block',
  templateUrl: './proposal-block.component.html',
  styleUrls: ['./proposal-block.component.less']
})
export class ProposalBlockComponent implements OnInit {
  @Input() name : String;
  @Input() price : String;

  constructor() { }

  ngOnInit() {
  }

}
