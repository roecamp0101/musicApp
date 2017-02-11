import { Component, OnInit, ElementRef } from '@angular/core';
import {ContentService} from '../content.service';


@Component({
    selector: 'portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css', './portfolio.css'],
    /*animations: [
         trigger('divystate', [
      state('normal', style({
        backgroundColor: 'green',
        transform: 'translateX(0)'
      })),
      state('highlighted',   style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
        transition('normal => highlighted', animate(300)),
        transition('highlighted => normal', animate(800))
        //transition('highlighted <=> normal', animate(800)) //to transition in both directions for the same timing
    
    ])
    ]*/
    
})
export class PortfolioComponent implements OnInit {
    
    /*
    private infoshow = false;
    
    viewDetails(){
      
        this.infoshow = !this.infoshow;
    }*/

    content: any [];

    
    constructor(contentService: ContentService, private elRef:ElementRef){
        this.content = contentService.getContent();

    }
 

  ngOnInit() {
      
  }

}
