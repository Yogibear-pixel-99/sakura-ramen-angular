import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { landingPageComponent } from './landingPage/landingPage.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, landingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura_angular';
}
