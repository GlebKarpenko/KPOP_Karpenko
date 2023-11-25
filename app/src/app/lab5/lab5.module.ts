import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { DataService } from './data.service';
import { ShowSelectedComponent } from './show-selected/show-selected.component';

@NgModule({
  declarations: [ ShowUsersComponent, ShowSelectedComponent ],

  imports: [
    CommonModule,
    HttpClientModule,
    AppComponent
  ],

  exports: [
    ShowUsersComponent,
    ShowSelectedComponent
  ],

  providers: [ DataService ]
})
export class Lab5Module { }
