import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { ImgFormComponent } from './app/lab3/img-form/img-form.component';
import { ChildComponent } from './app/lab4/child/child.component';
import { ParentComponent } from './app/lab4/parent/parent.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

platformBrowserDynamic().bootstrapModule( ImgFormComponent )
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule( ChildComponent )
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule( ParentComponent )
  .catch(err => console.error(err));
