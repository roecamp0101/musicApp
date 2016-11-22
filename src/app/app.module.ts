import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from './routing';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutcomponentComponent } from './aboutcomponent/aboutcomponent.component';
import { DownloadComponent } from './download/download.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutcomponentComponent,
    DownloadComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
