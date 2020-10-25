import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directve-demo',
  templateUrl: './directve-demo.component.html',
  styleUrls: ['./directve-demo.component.css']
})
export class DirectveDemoComponent implements OnInit {

  show: boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
