import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  ContentComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ...components
  ]
})
export class LayoutModule { }
