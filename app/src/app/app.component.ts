import { Component, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DynamicHostComponent } from './dynamic-host/dynamic-host.component';

import { Lab3Module } from './lab3/lab3.module';
import { ImgFormComponent } from './lab3/img-form/img-form.component';

import { Lab4Module } from './lab4/lab4.module';
import { ParentComponent } from './lab4/parent/parent.component';
import { ChildComponent } from './lab4/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    DynamicHostComponent,
    Lab3Module,
    Lab4Module
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'app';

  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

  loadComponent(option: string){
    console.log('option: ', option);
    if (option == 'lab3'){
      this.container.clear();
      const lab3Component = this.container.createComponent(ImgFormComponent);
    }
    if (option == 'lab4'){
      this.container.clear();
      const lab4Component = this.container.createComponent(ParentComponent);
    }
  }
}
