import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Importa el componente
import { FooterComponent } from './footer/footer.component'; // Importa el componente
import { CommonModule } from '@angular/common'; // Importa módulos necesarios
import { RouterModule } from '@angular/router'; // Importa el módulo de rutas si lo necesitas
import { FirstModuleComponent } from './first-module/first-module.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, NavbarComponent, FooterComponent, FirstModuleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'virginia_woolf_web';
}
