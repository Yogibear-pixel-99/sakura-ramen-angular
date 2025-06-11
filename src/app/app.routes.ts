import { Routes } from '@angular/router';
import { MainContent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: MainContent },
  { path: 'imprinttest', component: ImprintComponent },
];

