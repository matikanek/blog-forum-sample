import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsQuery } from 'src/app/+posts/store/posts.query';
import { PostsService } from 'src/app/+posts/store/posts.service';

@Component({
  selector: 'app-posts-single',
  templateUrl: './posts-single.component.html',
  styleUrls: ['./posts-single.component.scss']
})
export class PostsSingleComponent implements OnInit {
  posts$ = this.postsQuery.select(state => state.post);

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private postsQuery: PostsQuery
  ) { }

  ngOnInit(): void {
    this.postsService.getPost(+this.activatedRoute.snapshot.params.postId);
  }
}
