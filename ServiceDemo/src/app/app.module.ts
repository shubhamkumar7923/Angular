import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedeptComponent } from './employeedept/employeedept.component';
import {EmployeeService} from './employee.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeedeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
