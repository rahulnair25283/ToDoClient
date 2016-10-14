import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import {TaskService} from "./task/task.service";
import { TasklistComponent } from './tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [
    {provide:'task', useClass:TaskService},
    {provide: 'api', useValue: 'http://localhost:3000'}

    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
