import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.model';
import { faPlus, faComment } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-single-comments',
  templateUrl: './post-single-comments.component.html',
  styleUrls: ['./post-single-comments.component.scss']
})
export class PostSingleCommentsComponent {
  @Input() comments: Comment[] = [];
  @Input() newCommentForm: FormGroup = {} as FormGroup;
  @Output() submit = new EventEmitter()
  faPlus = faPlus;
  faComment = faComment;
  isPosting = false;

  onSubmit(): void {
    this.submit.emit();
  }
}
