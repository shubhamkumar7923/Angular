import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding-demo',
  templateUrl: './twowaybinding-demo.component.html',
  styleUrls: ['./twowaybinding-demo.component.css']
})
export class TwowaybindingDemoComponent implements OnInit {

  public name="";
  constructor() { }

  ngOnInit(): void {
  }

}
