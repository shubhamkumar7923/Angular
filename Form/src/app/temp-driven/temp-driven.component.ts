import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temp-driven',
  templateUrl: './temp-driven.component.html',
  styleUrls: ['./temp-driven.component.css']
})
export class TempDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  display(obj){
    console.log(obj);
  }
}
