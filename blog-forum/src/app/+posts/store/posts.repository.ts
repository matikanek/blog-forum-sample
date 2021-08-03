import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from 'src/app/shared/models/post.model';
import { environment } from 'src/environments/environment';
import { Comment } from 'src/app/shared/models/comment.model';

@Injectable({ providedIn: 'root' })
export class PostsRepository {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}/posts/${id}`);
  }

  getComments(postId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${environment.apiUrl}/comments?postId=${postId}`);
  }

  postComment(payload: Comment, postId: number): Observable<string> {
    // Tutaj byłoby dodawanie komentarza ale nie ma tego w API
    // this.http.post<Comment>(`${environment.apiUrl}/comments`, {...payload, postId});
    return of('response');
  }
}