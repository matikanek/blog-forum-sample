import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './components/comment/comment.component';

const components = [
  CommentComponent
]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
