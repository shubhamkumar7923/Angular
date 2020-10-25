import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationDemoComponent } from './interpolation-demo/interpolation-demo.component';
import { PropertDemoComponent } from './propert-demo/propert-demo.component';
import { EventbindingDemoComponent } from './eventbinding-demo/eventbinding-demo.component';
import { TwowaybindingDemoComponent } from './twowaybinding-demo/twowaybinding-demo.component';
import { from } from 'rxjs';
import { DirectveDemoComponent } from './directve-demo/directve-demo.component';
import { FSDemoComponent } from './fsdemo/fsdemo.component';
import { SwitchComponent } from './switch/switch.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Child1Component } from './parent/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationDemoComponent,
    PropertDemoComponent,
    EventbindingDemoComponent,
    TwowaybindingDemoComponent,
    DirectveDemoComponent,
    FSDemoComponent,
    SwitchComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
