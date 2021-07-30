import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSingleComponent } from './containers/posts-single/posts-single.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PostsSingleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FontAwesomeModule
  ]
})
export class PostsSingleModule { }
