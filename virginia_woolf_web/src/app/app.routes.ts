import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FirstModuleComponent } from './first-module/first-module.component'
import path from 'path';
import { ApplicationConfig } from '@angular/core';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    {
        path: 'inicio',
        component: HomeComponent,
    },
    {
        path: '',
        redirectTo:'inicio',
        pathMatch: 'full'
    },
    { 
        path: 'footer', 
        component: FooterComponent
    },
    {
        path: 'navbar', 
        component: NavbarComponent
    },
    {
        path: 'error',
        component: ErrorPageComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];
