import { Component, OnInit,ChangeDetectionStrategy, VERSION } from '@angular/core';

@Component({
  selector: 'life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  constructor() { 
    console.log("AppComponent:Constructed");
  }

  ngOnChanges(){
    console.log("AppComponent:ngOnChanges"); 
  }
  ngOnInit(): void {
    console.log("AppComponent:ngOnInit");
  }
  ngDoCheck(){
    console.log("AppComponent:DoCheck");
  }
  ngAfterContentInit(){
    console.log("AppComponent:ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("AppComponent:AfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("AppComponent:AfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("AppComponent:AfterViewChecked");
  }
  ngOnDestroy(){
    console.log("AppComponent:ngOnDestroy");
  }
}
