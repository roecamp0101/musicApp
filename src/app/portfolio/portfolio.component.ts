import { Component, OnInit, ElementRef } from '@angular/core';
import {ContentService} from '../content.service';


@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', './portfolio.css']
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
