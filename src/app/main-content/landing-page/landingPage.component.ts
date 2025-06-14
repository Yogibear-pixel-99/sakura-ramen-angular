import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component (
    {
        selector: 'app-landingPage',
        standalone: true,
        imports : [CommonModule, NavbarComponent],
        styleUrl: 'landingPage.component.scss',
        templateUrl: 'landingPage.component.html'
    }
)

export class LandingPageComponent {}