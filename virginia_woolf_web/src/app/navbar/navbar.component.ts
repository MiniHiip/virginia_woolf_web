import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { BehaviorSubject } from 'rxjs';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule], 
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private fragmentReady = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.fragmentReady.next(true); // Indicar que la navegación ha terminado
      }
    });
  }
  menuOpen: boolean = false;
  private isScrolling = false; 

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navigateToFragment(fragment: string) {
    this.router.navigate([], { fragment });

    this.fragmentReady.subscribe(ready => {
      if (ready) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        this.fragmentReady.next(false); // Resetear el estado
      }
    });
  }
}

