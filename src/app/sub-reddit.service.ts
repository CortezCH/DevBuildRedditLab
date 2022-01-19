import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubRedditService {
  urlBase : string = "http://www.reddit.com/r/"; // aww/.json";

  constructor(private http : HttpClient) { }

  searchSubRedditByName(subRedditName : string) : Observable<any> {
    let fullUrl : string = `${this.urlBase}${subRedditName}/.json`;
    let result : Observable<any> = this.http.get(fullUrl);
    console.log(fullUrl);
    console.log(result);
    return result;
  }
}
