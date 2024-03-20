import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
