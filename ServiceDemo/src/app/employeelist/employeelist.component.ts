import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public employees=[];
  constructor(private _emplyeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this._emplyeeservice.getEmployees();
  }

}
