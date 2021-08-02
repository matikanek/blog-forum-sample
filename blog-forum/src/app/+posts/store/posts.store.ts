import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Comment } from 'src/app/shared/models/comment.model';
import { Post } from 'src/app/shared/models/post.model';

export interface PostsState extends EntityState<Post, number> {
  post?: Post;
  comments: Comment[];
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posts' })
export class PostsStore extends EntityStore<PostsState> {

  constructor() {
    super();
  }
}