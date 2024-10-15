import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-s',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule
  ],
  templateUrl: './about-s.component.html',
  styleUrl: './about-s.component.scss'
})
export class AboutSComponent {
  
}
