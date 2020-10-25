import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding-demo',
  templateUrl: './eventbinding-demo.component.html',
  styleUrls: ['./eventbinding-demo.component.css']
})
export class EventbindingDemoComponent implements OnInit {

  public name="";
  onClick(){
    console.log("Welcome");
    this.name='How are you';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
