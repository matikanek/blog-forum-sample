import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() postId = 0;
  @Input() id = 0;
  @Input() name = '';
  @Input() email = '';
  @Input() body = '';

  constructor() { }

  ngOnInit(): void {
  }

}
