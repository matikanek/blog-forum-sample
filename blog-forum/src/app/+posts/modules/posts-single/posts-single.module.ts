import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSingleComponent } from './containers/posts-single/posts-single.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostsSingleComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class PostsSingleModule { }
