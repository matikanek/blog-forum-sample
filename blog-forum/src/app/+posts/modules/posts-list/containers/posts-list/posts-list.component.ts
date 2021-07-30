import { Component, OnInit } from '@angular/core';
import { PostsQuery } from 'src/app/+posts/store/posts.query';
import { PostsService } from 'src/app/+posts/store/posts.service';
import { Post } from 'src/app/shared/models/post.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  dividedPosts: Post[][] = [];
  posts$ = this.postsQuery
    .selectAll()
    .pipe(
      tap((posts) => {
        this.dividedPosts = new Array(Math.ceil(posts.length/6)).fill(0).map((_, index) => {
          return [...posts].splice(index*6, 6);
        });
      })
    );
  
  constructor(
    private postsService: PostsService,
    private postsQuery: PostsQuery
  ) { }

  ngOnInit(): void {
    this.postsService.getPosts();
  }
}
