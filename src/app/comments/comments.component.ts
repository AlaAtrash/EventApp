import { Component, OnInit } from '@angular/core';
import {AllEventsComponent} from '../all-events/all-events.component'
import  {CommentBlockComponent} from '../comment-block/comment-block.component'


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.less']
})
export class CommentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
