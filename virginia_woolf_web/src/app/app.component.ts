import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Importa el componente
import { FooterComponent } from './footer/footer.component'; // Importa el componente
import { EnrollSectionComponent } from './enroll-section/enroll-section.component';
import { CommonModule } from '@angular/common'; // Importa módulos necesarios
import { RouterModule } from '@angular/router'; // Importa el módulo de rutas si lo necesitas
import { FirstModuleComponent } from './first-module/first-module.component';
import { ThirdModuleComponent } from './third-module/third-module.component';
import { ModulePrimariaComponent } from './module-primaria/module-primaria.component';
import { SixthModuleComponent } from './sixth-module/sixth-module.component';
import { ModuleSecundariaComponent } from './module-secundaria/module-secundaria.component';
import { ModulePreparatoriaComponent } from './module-preparatoria/module-preparatoria.component';


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
    ModulePreparatoriaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'virginia_woolf_web';
}
