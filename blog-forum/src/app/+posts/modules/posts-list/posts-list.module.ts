import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListListComponent } from './components/posts-list-list/posts-list-list.component';
import { PostsListComponent } from './containers/posts-list/posts-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PostsListListComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class PostsListModule { }
