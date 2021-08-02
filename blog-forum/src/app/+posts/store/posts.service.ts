import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { PostsRepository } from './posts.repository';
import { PostsStore } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(
    private postsRepository: PostsRepository,
    private postsStore: PostsStore
  ) {}

  getPosts(): void {
    this.postsRepository
      .getPosts()
      .pipe(
        tap(posts => this.postsStore.set(posts)),
        catchError((error) => of(error))
      )
      .subscribe();
  }

  getPost(id: number): void {
    this.postsRepository
      .getPost(id)
      .pipe(
        tap(post => this.postsStore.update({post})),
        catchError((error) => of(error))
      )
      .subscribe();
  }

  getComments(postId: number): void {
    this.postsRepository
      .getComments(postId)
      .pipe(
        tap(comments => this.postsStore.update({comments})),
        catchError((error) => of(error))
      )
      .subscribe()
  }  
}