import { Injectable } from '@angular/core';
import { PostsRepository } from './posts.repository';
import { PostsStore } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(
    private postsRepository: PostsRepository,
    private postsStore: PostsStore
  ) {}

  getPosts(): void {
    this.postsRepository.getPosts().subscribe((posts) => {
      this.postsStore.set(posts);
    });
  }

  getPost(id: number): void {
    this.postsRepository.getPost(id).subscribe((post) => {
      this.postsStore.update({post});
    });
  }
}