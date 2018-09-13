import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.component.html',
  styleUrls: ['./comment-block.component.less']
})
export class CommentBlockComponent implements OnInit {

  @Input() commenter	:string;
  @Input() commentContent :string;
  @Input() commentTime :string;
  @Input() avatarURL : string;
  
  constructor() { }

  ngOnInit() {
  }

}
