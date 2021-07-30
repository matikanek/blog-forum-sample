import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './containers/posts/posts.component';
import { PostsListComponent } from './modules/posts-list/containers/posts-list/posts-list.component';
import { PostsSingleComponent } from './modules/posts-single/containers/posts-single/posts-single.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    children: [
      {
        path: '',
        component: PostsListComponent
      },
      {
        path: ':postId',
        component: PostsSingleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
