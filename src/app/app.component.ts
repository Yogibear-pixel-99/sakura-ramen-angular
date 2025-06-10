import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContent } from "./main-content/main-content.component";
import { LandingPageComponent } from "./main-content/landing-page/landingPage.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MainContent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura_angular';
}
