import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from './routing';
import {ContentService} from './content.service'
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { DownloadComponent } from './download/download.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutcomponentComponent,
    DownloadComponent,
    PortfolioComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
    
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
