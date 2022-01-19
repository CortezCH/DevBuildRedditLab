import { Component } from '@angular/core';
import { SubRedditService } from './sub-reddit.service';
import { Convert, SubReddit } from './subReddit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SubRedditService]
})
export class AppComponent {
  title = 'DevBuildRedditLab';
  subReddit? : SubReddit;
  
  constructor(private subRedditService : SubRedditService){}

  getSubReddit(){
    let subRedditName : string = ( <HTMLInputElement> document.getElementById("subRedditName") ).value;
    this.subRedditService.searchSubRedditByName(subRedditName)
    .subscribe( 
      (result : any) => {
        console.log(result);
        let json : string = Convert.subRedditToJson(result);
        let subReddit : SubReddit = Convert.toSubReddit(json);
        this.subReddit = subReddit;
      }
    )
  }
}
