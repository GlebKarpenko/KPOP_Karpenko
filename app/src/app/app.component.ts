import { Component, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DynamicHostComponent } from './dynamic-host/dynamic-host.component';

import { Lab3Module } from './lab3/lab3.module';
import { ImgFormComponent } from './lab3/img-form/img-form.component';

import { Lab4Module } from './lab4/lab4.module';
import { ParentComponent } from './lab4/parent/parent.component';

import { Lab5Module } from './lab5/lab5.module';
import { ShowUsersComponent } from './lab5/show-users/show-users.component';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    HttpClientModule,
    DynamicHostComponent,
    Lab3Module,
    Lab4Module,
    Lab5Module
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'app';

  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

  loadComponent(option: string){
    if (option == 'lab3'){
      this.container.clear();
      const lab3Component = this.container.createComponent(ImgFormComponent);
    }
    if (option == 'lab4'){
      this.container.clear();
      const lab4Component = this.container.createComponent(ParentComponent);
    }
    if (option == 'lab5'){
      this.container.clear();
      const lab5Component = this.container.createComponent(ShowUsersComponent);
    }
  }
}
