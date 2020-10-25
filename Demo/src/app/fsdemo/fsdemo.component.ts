import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fsdemo',
  templateUrl: './fsdemo.component.html',
  styleUrls: ['./fsdemo.component.css']
})
export class FSDemoComponent implements OnInit {

  public color = ["red", "blue","green","black"];
  constructor() { }

  ngOnInit(): void {
  }

}
