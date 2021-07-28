import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-posts-list-list',
  templateUrl: './posts-list-list.component.html',
  styleUrls: ['./posts-list-list.component.scss']
})
export class PostsListListComponent implements OnInit {
  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
