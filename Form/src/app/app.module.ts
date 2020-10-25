import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempDrivenComponent } from './temp-driven/temp-driven.component';
import { ReactivfromComponent } from './reactivfrom/reactivfrom.component';


@NgModule({
  declarations: [
    AppComponent,
    TempDrivenComponent,
    ReactivfromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
