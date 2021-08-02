import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSingleComponent } from './containers/posts-single/posts-single.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { PostSingleCommentsComponent } from './components/post-single-comments/post-single-comments.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsSingleComponent,
    PostSingleCommentsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FontAwesomeModule,
    SharedModule,
    NzInputModule,
    FormsModule
  ]
})
export class PostsSingleModule { }
