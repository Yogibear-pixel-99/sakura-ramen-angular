import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landingPage.component';


@Component (
    {
        selector: 'app-main-content',
        standalone: true,
        imports : [CommonModule, LandingPageComponent],
        styleUrl: 'main-content.component.scss',
        templateUrl: 'main-content.component.html'
    }
)

export class MainContent {}