import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FirstModuleComponent } from './app/first-module/first-module.component';
import { EnrollSectionComponent } from './app/enroll-section/enroll-section.component';
import { ThirdModuleComponent } from './app/third-module/third-module.component';
import { AboutSComponent } from './app/about-s/about-s.component';
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { ErrorPageComponent } from './app/error-page/error-page.component';



// const routes: Routes = [
//   { path: '', redirectTo: '/inicio', pathMatch: 'full' },
//   { path: 'inicio', component: FirstModuleComponent },  // Ruta de inicio
//   { path: 'enroll', component: EnrollSectionComponent },  // Otra ruta para sección de inscripción
//   { path: 'about', component: AboutSComponent },  // Conócenos
//   { path: 'contact', component: ContactUsComponent },  // Contáctanos
//   { path: 'third-module', component: ThirdModuleComponent },  // Tercer módulo
//   { path: 'error', component: ErrorPageComponent },  // Error
// ];

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)]
// }).catch(err => console.error(err));
