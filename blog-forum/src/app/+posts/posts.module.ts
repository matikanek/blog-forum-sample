import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './containers/posts/posts.component';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsListModule } from './modules/posts-list/posts-list.module';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    PostsListModule
  ]
})
export class PostsModule { }
