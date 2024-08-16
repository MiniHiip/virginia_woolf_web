import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-third-module',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './third-module.component.html',
  styleUrls: ['./third-module.component.scss']
})
export class ThirdModuleComponent { }
