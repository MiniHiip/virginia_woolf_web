import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { FirstModuleComponent } from './app/first-module/first-module.component';
import { EnrollSectionComponent } from './app/enroll-section/enroll-section.component';
import { ThirdModuleComponent } from './app/third-module/third-module.component';
import { AboutSComponent } from './app/about-s/about-s.component';
import { ContactUsComponent } from './app/contact-us/contact-us.component';
import { ErrorPageComponent } from './app/error-page/error-page.component';
import { error } from 'console';

bootstrapApplication(ContactUsComponent,).catch(err => console.error(err));
