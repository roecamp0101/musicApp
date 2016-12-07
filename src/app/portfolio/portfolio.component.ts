import { Component, OnInit } from '@angular/core';
import {ContentService} from '../content.service';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css', './portfolio.css']
})
export class PortfolioComponent implements OnInit {

    content: any [];

    
    constructor(contentService: ContentService){
        this.content = contentService.getContent();

    }

  ngOnInit() {
  }

}
