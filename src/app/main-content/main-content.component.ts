import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landingPage.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { FindUsAtComponent } from './find-us-at/find-us-at.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    HowToOrderComponent,
    OurMenuComponent,
    FindUsAtComponent
  ],
  styleUrl: 'main-content.component.scss',
  templateUrl: 'main-content.component.html',
})
export class MainContent {}
