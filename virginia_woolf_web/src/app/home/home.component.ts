import { Component } from '@angular/core';
import { FirstModuleComponent } from '../first-module/first-module.component';
import { EnrollSectionComponent } from '../enroll-section/enroll-section.component';
import { ThirdModuleComponent } from '../third-module/third-module.component';
import { AboutSComponent } from '../about-s/about-s.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { SixthModuleComponent } from '../sixth-module/sixth-module.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FirstModuleComponent,
    EnrollSectionComponent,
    ThirdModuleComponent,
    SixthModuleComponent,
    AboutSComponent,
    ContactUsComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
