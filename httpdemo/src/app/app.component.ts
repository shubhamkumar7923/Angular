import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpdemo';
  loadedPosts = [];
  constructor(private http:HttpClient){}
  ngOnInit(){}
    onCreatePost(postData: {title: string; content: string}){
      // send Http request
      this.http
      .post(
        'https://projdemo-48739.firebaseio.com/posts.json',
        postData
      )
      .subscribe(resposeData => {
        console.log(resposeData);
      });
    }
    onFetchPosts(){

    }
    onClearPosts(){

    }
}
