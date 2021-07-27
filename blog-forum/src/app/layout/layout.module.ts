import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftColumnComponent } from './components/left-column/left-column.component';
import { RightColumnComponent } from './components/right-column/right-column.component';
import { ContentComponent } from './components/content/content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  LeftColumnComponent,
  RightColumnComponent,
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
