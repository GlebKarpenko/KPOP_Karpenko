import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({

  declarations: [
    ChildComponent,
    ParentComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AppComponent
  ],

  exports: [
    ChildComponent,
    ParentComponent
  ]
})
export class Lab4Module { }
