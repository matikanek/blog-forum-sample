import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListListComponent } from './components/posts-list-list/posts-list-list.component';
import { PostsListComponent } from './containers/posts-list/posts-list.component';



@NgModule({
  declarations: [
    PostsListListComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsListModule { }
