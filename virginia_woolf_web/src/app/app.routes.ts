import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import path from 'path';

export const routes: Routes = [
    { 
        path: 'footer', 
        component: FooterComponent
    },
    {
        path: 'navbar', 
        component: NavbarComponent
    }
];
