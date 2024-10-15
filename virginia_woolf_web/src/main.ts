import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FirstModuleComponent } from './app/first-module/first-module.component';



const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: FirstModuleComponent },
  // { path: 'convocatorias', component: ConvocatoriasComponent },
  // { path: 'conocenos', component: ConocenosComponent },
  // { path: 'contactanos', component: ContactanosComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
