import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ModulePrimariaComponent } from '../module-primaria/module-primaria.component';

@Component({
  selector: 'app-view-primaria',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, ModulePrimariaComponent],
  templateUrl: './view-primaria.component.html',
  styleUrl: './view-primaria.component.scss'
})
export class ViewPrimariaComponent {

}
