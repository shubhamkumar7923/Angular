import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Proj';
  loadedPosts = [];
  constructor(private http:HttpClient){}
  ngOnInit(){
    this.fetchPosts();
  }
  onCreatePost(postDate: {title: string; content: string}){
    this.http
    .post(
      'https://projdemo-48739.firebaseio.com/posts.json',
      postDate
    )
    .subscribe(responseData =>{
      console.log(responseData);
    });
  }
  onFetchPosts(){
    this.fetchPosts();
  }
  onClearPosts(){

  }
  private fetchPosts(){
    this.http
    .get('https://projdemo-48739.firebaseio.com/posts.json')
    .pipe(
      map(responseData =>{
        const postsArray=[];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            postsArray.push({...responseData[key],id: key});
          }
        }
        return postsArray;
      })
    )
    .subscribe(posts =>{
      console.log(posts);
    });
  }
}
