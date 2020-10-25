import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-interpolation-demo',
  templateUrl: './interpolation-demo.component.html',
  styleUrls: ['./interpolation-demo.component.css']
})
export class InterpolationDemoComponent implements OnInit {
title="Welcome to Angular";
public name="Kishore";
greet(){
  return "Hello"+ this.name
}
a:number=10;
b:number=30;
  constructor() { }

  ngOnInit(): void {
  }

}
