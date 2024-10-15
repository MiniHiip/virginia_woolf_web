import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EnrollSectionComponent } from './enroll-section/enroll-section.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstModuleComponent } from './first-module/first-module.component';
import { ThirdModuleComponent } from './third-module/third-module.component';
import { ModulePrimariaComponent } from './module-primaria/module-primaria.component';
import { SixthModuleComponent } from './sixth-module/sixth-module.component';
import { ModuleSecundariaComponent } from './module-secundaria/module-secundaria.component';
import { ModulePreparatoriaComponent } from './module-preparatoria/module-preparatoria.component';
import { AboutSComponent } from './about-s/about-s.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component'; // Asegúrate de importar el HomeComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    FirstModuleComponent,
    EnrollSectionComponent,
    ThirdModuleComponent,
    SixthModuleComponent,
    ModulePrimariaComponent,
    ModuleSecundariaComponent,
    ModulePreparatoriaComponent,
    AboutSComponent,
    ContactUsComponent,
    ErrorPageComponent,
    RouterLink,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'virginia_woolf_web';

  
}
