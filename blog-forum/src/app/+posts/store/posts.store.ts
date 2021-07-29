import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Post } from 'src/app/shared/models/post.model';

export interface PostsState extends EntityState<Post, number> {
  post?: Post;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class PostsStore extends EntityStore<PostsState> {

  constructor() {
    super();
  }
}