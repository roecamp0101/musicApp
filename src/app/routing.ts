import {Routes, RouterModule} from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import {AboutcomponentComponent} from './aboutcomponent/aboutcomponent.component';
import {DownloadComponent} from './download/download.component';
import {ContactComponent} from './contact/contact.component';

const APP_ROUTES: Routes = [
    
    {path: '', component: HomeComponentComponent },
    {path: 'about', component: AboutcomponentComponent },
    {path: 'download', component: DownloadComponent },
    {path: 'contact', component: ContactComponent },
    {path: '**', redirectTo: '', pathMatch: 'full' }
    
];


export const routing = RouterModule.forRoot(APP_ROUTES)