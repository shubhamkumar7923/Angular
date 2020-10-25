import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivfrom',
  templateUrl: './reactivfrom.component.html',
  styleUrls: ['./reactivfrom.component.css']
})
export class ReactivfromComponent implements OnInit {
  student;
  constructor() { }

  ngOnInit(): void {
    this.student=new FormGroup({
      firstname:new FormControl("",Validators.compose(
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)
        ]
      )),
      lastname:new FormControl("",this.lastnameValidator),
      age:new FormControl("",Validators.compose(
        [
          Validators.min(18),
          Validators.max(60),
        ]
      )),
      courses:new FormControl("")
    })
  }
  lastnameValidator(control){
    if(control.value.length<3)
    return {lastname:true}
  }
  display(obj){
    console.log("ReactiveformsModule forms ");
    console.log(obj);
  }

}
