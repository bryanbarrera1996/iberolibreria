import { Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

export const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', component: HomeComponent }
  ];