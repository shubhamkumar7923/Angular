import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  getEmployees(){
    return[
    {"id":1,"name":"anand","age":22},
    {"id":2,"name":"kishore","age":22},
    {"id":3,"name":"sunil","age":22},
    {"id":4,"name":"umesh","age":22}
    ];
  }
  constructor() { }
}
