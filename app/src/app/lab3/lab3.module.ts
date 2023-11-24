import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImgFormComponent } from './img-form/img-form.component';
import { AppComponent } from '../app.component';

@NgModule({

  declarations: [
    ImgFormComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AppComponent
  ],

  exports: [
    ImgFormComponent
  ]
})
export class Lab3Module { }
