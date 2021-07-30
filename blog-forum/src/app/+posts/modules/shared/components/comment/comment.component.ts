import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() postId = 0;
  @Input() id = 0;
  @Input() name = '';
  @Input() email = '';
  @Input() body = '';

  constructor() { }

  ngOnInit(): void {
  }

}
