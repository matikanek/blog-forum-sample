import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.model';
import { faPlus, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-single-comments',
  templateUrl: './post-single-comments.component.html',
  styleUrls: ['./post-single-comments.component.scss']
})
export class PostSingleCommentsComponent implements OnInit {
  @Input() comments: Comment[] = [];
  @Input() onPosting: boolean = false;
  @Output() onPostingChange = new EventEmitter();
  faPlus = faPlus;
  faComment = faComment;

  constructor() { }

  ngOnInit(): void {
  }

  onNewComment(): void {
    this.onPosting = !this.onPosting;
    this.onPostingChange.emit(this.onPosting);
  }
}
