import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'inicio', component: NavbarComponent },
  { path: 'convocatorias', component: NavbarComponent },
  { path: 'conocenos', component: NavbarComponent },
  { path: 'contactanos', component: NavbarComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
