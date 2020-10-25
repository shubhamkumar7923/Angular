import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert-demo',
  templateUrl: './propert-demo.component.html',
  styleUrls: ['./propert-demo.component.css']
})
export class PropertDemoComponent implements OnInit {

  public myId="Testing"
  constructor() { }

  ngOnInit(): void {
  }

}
