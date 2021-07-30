import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { posts } from './posts.mocks';
import { Post } from 'src/app/shared/models/post.model';

@Injectable({ providedIn: 'root' })
export class PostsRepository {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return of(posts)
    //return this.http.get<Post[]>('Link do API');
  }

  getPost(id: number): Observable<Post> {
    return of(posts.find(song => song.id === id) as Post);
  }
}