import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employeedept',
  templateUrl: './employeedept.component.html',
  styleUrls: ['./employeedept.component.css']
})
export class EmployeedeptComponent implements OnInit {

  public employees=[
    {"id":1,"name":"anand","age":22},
    {"id":2,"name":"kishore","age":22},
    {"id":3,"name":"sunil","age":22},
    {"id":4,"name":"umesh","age":22}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
