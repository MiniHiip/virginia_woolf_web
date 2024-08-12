import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'inicio', component: NavbarComponent },
  { path: 'convocatorias', component: NavbarComponent },
  { path: 'conocenos', component: NavbarComponent },
  { path: 'contactanos', component: NavbarComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
